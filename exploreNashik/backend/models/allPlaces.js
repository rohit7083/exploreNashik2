const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    images: {
      type: [
        {
          imageUrl: {
            type: String,
            required: true,
          },
          publicId: {
            type: String,
            
          },
        },
      ],
      required: true,
      validate: {
        validator: function (value) {
          return value.length > 0;
        },
        message: "At least one image is required",
      },
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    location: {
      type: [String],
      // required: true,
    },

    distance: {
      type: Number,
      // required: true,
    },

    bestTime: {
      type: String,
    },
    timings: {
      type: String,
    },

    entryFee: {
      type: String,
    },
    contact_number: {
      type: String,
    },

    cuisine: {
      type: [String],
    },
    priceRange: {
      type: String,
    },

    rating: {
      type: Number,
    },
    reviews: {
      type: Number,
    },
    difficulty: {
      type: String,
    },
    bestPlaces: {
      type: [String],
    },

    services: {
      type: [String],
    },
    facilities: {
      type: [String],
    },
    mapLocation: {
      type: [String],
      // required: true,
    },
    contact: {
      type: Number,
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Place", placeSchema);
