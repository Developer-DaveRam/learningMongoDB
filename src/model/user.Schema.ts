import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  name: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  preferences: {
    type: Schema.Types.Mixed, // empty object / future preferences
    default: {}
  }

}, {
  timestamps: true
});

export const User = mongoose.model("User", userSchema);
