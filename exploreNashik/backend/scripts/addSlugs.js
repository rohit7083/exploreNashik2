
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});
const connectDB = require("../config/db");
const Place = require("../models/allPlaces");
const slugify = require("slugify");
console.log("MONGO_URI:", process.env.MONGO_URI ? "Loaded ✅" : "Not Loaded ❌");
const run = async () => {
  try {
    await connectDB();

    const places = await Place.find();

    for (const place of places) {
      if (!place.slug) {
        place.slug = slugify(place.name, {
          lower: true,
          strict: true,
          trim: true,
        });

        await place.save();

        console.log(`✔ ${place.name} -> ${place.slug}`);
      }
    }

    console.log("✅ All slugs added successfully");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();