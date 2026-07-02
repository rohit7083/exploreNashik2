const place = require("../models/allPlaces");
const cloudinary = require("../config/Cloudnary");
const axios = require("axios");

const sharp = require("sharp");
const streamifier = require("streamifier");
// Get all places
exports.getAllPlaces = async (req, res) => {
  try {
    const { category, subcategory } = req.query;

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 12;
    const skip = (page - 1) * limit;

    const filter = {};

    if (category) {
      filter.category = { $regex: `^${category}$`, $options: "i" };
    }

    if (subcategory) {
      filter.subcategory = { $regex: `^${subcategory}$`, $options: "i" };
    }

    const places = await place
      .find(filter)
      .skip(skip)
      .limit(limit);

    const total = await place.countDocuments(filter);

    res.status(200).json({
      places,
      page,
      total,
      hasMore: skip + places.length < total,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Get single place
exports.getPlaceById = async (req, res) => {
  try {
    const placeById = await place.findById(req.params.id);

    if (!placeById) {
      return res.status(404).json({
        message: "Place not found",
      });
    }

    res.status(200).json(placeById);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// Create place
// exports.createPlace = async (req, res) => {
//   try {
//     const images = req.files
//       ? req.files.map((file) => ({
//           imageUrl: file.path,
//           publicId: file.filename
//         }))
//       : [];

//     const newPlace = await place.create({
//       ...req.body,
//       images
//     });

//     res.status(201).json(newPlace);

//   } catch (error) {
//     res.status(400).json({
//       error: error.message
//     });
//   }
// };

// User image upload करतो → आधी Cloudinary वर जाते → मग ती image परत download होते → compress होते → पुन्हा Cloudinary वर upload होते → original image delete होते

const uploadToCloudinary = (buffer, folder = "places") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      },
    );

    streamifier.createReadStream(buffer).pipe(stream);
  });
};

exports.createPlace = async (req, res) => {
  try {
    let images = [];

    if (req.files?.length) {
      images = await Promise.all(
        req.files.map(async (file) => {
          // download cloudinary image
          const response = await axios.get(file.path, {
            responseType: "arraybuffer",
          });
          // Sharp ला URL चालत नाही.
          // म्हणून axios ने ती image download केली.

          // Downloaded image binary data ला buffer मध्ये convert केलं.
          const originalBuffer = Buffer.from(response.data);

          // compress image
          const compressedBuffer = await sharp(originalBuffer)
            .resize({
              width: 1200,
              withoutEnlargement: true,
            })
            .jpeg({
              quality: 70,
            })
            .toBuffer();

          // upload compressed image
          const uploaded = await uploadToCloudinary(compressedBuffer);

          // delete original uploaded file
          await cloudinary.uploader.destroy(file.filename);

          return {
            imageUrl: uploaded.secure_url,
            publicId: uploaded.public_id,
          };
        }),
      );
    }

    const newPlace = await place.create({
      ...req.body,
      images,
    });

    res.status(201).json(newPlace);
  } catch (error) {
    console.error("CREATE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  }
};

// Update place
exports.updatePlace = async (req, res) => {
  try {
    const existingPlace = await place.findById(req.params.id);

    if (!existingPlace) {
      return res.status(404).json({
        message: "Place not found",
      });
    }

    let images = existingPlace.images;

    // if new images uploaded
    if (req.files && req.files.length > 0) {
      // delete old cloudinary images
      if (existingPlace.images.length > 0) {
        for (const img of existingPlace.images) {
          await cloudinary.uploader.destroy(img.publicId);
        }
      }

      images = req.files.map((file) => ({
        imageUrl: file.path,
        publicId: file.filename,
      }));
    }

    const updatedPlace = await place.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        images,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    res.status(200).json(updatedPlace);
  } catch (error) {
    console.log(error);
    console.error("REAL ERROR:", error);
    return res.status(500).json({
      message: error.message,
      error,
    });
  }
};

// Delete place
exports.deletePlace = async (req, res) => {
  try {
    const existingPlace = await place.findById(req.params.id);

    if (!existingPlace) {
      return res.status(404).json({
        message: "Place not found",
      });
    }

    // delete images from cloudinary
    if (existingPlace.images.length > 0) {
      for (const img of existingPlace.images) {
        await cloudinary.uploader.destroy(img.publicId);
      }
    }

    await place.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Place deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// Bulk image upload साठी controller
// exports.addImagesInbulk = async (req, res) => {
//   try {

//     const images = await Promise.all(
//       req.files.map(async (file) => {
//         const response = await axios.get(file.path, {
//           responseType: "arraybuffer",
//         });

//         const originalBuffer = Buffer.from(response.data);

//         const compressedBuffer = await sharp(originalBuffer)
//           .resize({
//             width: 1200,
//             withoutEnlargement: true,
//           })
//           .jpeg({
//             quality: 70,
//             mozjpeg: true,
//           })
//           .toBuffer();

//         const uploaded = await uploadToCloudinary(compressedBuffer);

//         await cloudinary.uploader.destroy(file.filename);

//         return {
//           imageUrl: uploaded.secure_url,
//           publicId: uploaded.public_id,
//         };
//       })
//     );

//     return res.status(200).json({
//       success: true,
//       images,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

exports.addImagesInbulk = async (req, res) => {
  try {
    if (!req.files?.length) {
      return res.status(400).json({
        success: false,
        message: "No images uploaded",
      });
    }
    console.log(req.files);
    const images = await Promise.all(
      req.files.map(async (file) => {
        const response = await axios.get(file.path, {
          responseType: "arraybuffer",
        });

        const compressedBuffer = await sharp(response.data)
          .resize({
            width: 1200,
            withoutEnlargement: true,
          })
          .jpeg({
            quality: 70,
            mozjpeg: true,
          })
          .toBuffer();

        const uploaded = await uploadToCloudinary(compressedBuffer);

        return {
          imageUrl: uploaded.secure_url,
          publicId: uploaded.public_id,
        };
      }),
    );

    res.status(200).json({
      success: true,
      images,
    });
  } catch (error) {
    console.log("FULL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};
//bulk json upload साठी script with image url
exports.bulkUploadProducts = async (req, res) => {
  try {
    const products = req.body;

    if (!Array.isArray(products)) {
      return res.status(400).json({
        success: false,
        message: "Request body must be an array",
      });
    }

    const result = await place.insertMany(products, {
      ordered: false,
    });

    return res.status(201).json({
      success: true,
      count: result.length,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
