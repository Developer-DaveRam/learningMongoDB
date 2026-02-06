import mongoose, { Schema } from "mongoose";

const session = new Schema({
  jwt: {
    type: String,
    required: true
  },

  user_id: {
    type: String,
    required: true
    // if user collection irundhaa
    // ref: "User"
  }

}, {
  timestamps: true
});

export const Auth = mongoose.model("Session", session);
