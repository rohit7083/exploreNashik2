const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },


    images: [
      {
        imageUrl: {
          type: String,
          required: true,
        },
        publicId: {
          type: String,
          required: true,
        },
      },
    ],
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
      type: String,
      required: true,
    },

    distance: {
      type: Number,
      required: true,
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

    services: {
      type: [String],
    },
    facilities: {
      type: [String],
    },
    mapLocation: {
      type: String,
      required: true,
    },
    contact:{
      type:Number,

    }
    
  },
  { timestamps: true },
);
module.exports = mongoose.model("Place", placeSchema);
