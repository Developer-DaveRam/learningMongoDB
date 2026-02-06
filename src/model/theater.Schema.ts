import mongoose, { Schema } from "mongoose";

const theaterSchema = new Schema({
  theaterId: {
    type: Number,
    required: true
  },

  location: {
    address: {
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      street1: {
        type: String,
        required: true
      },
      street2: {
        type: String,
        default: null
      },
      zipcode: {
        type: String,
        required: true
      }
    },

    geo: {
      type: {
        type: String,
        required: true,
        enum: ["Point"] // usually geoJSON
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true
      }
    }
  }

}, {
  timestamps: true
});

export const Theater = mongoose.model("Theater", theaterSchema);
