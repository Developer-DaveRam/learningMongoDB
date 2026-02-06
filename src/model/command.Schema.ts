import mongoose, { Schema } from "mongoose";

const commandSchema = new Schema(
  {
    date: {
      type: Date,
      required: true
    },

    email: {
      type: String,
      required: true,
      trim: true
    },

    movie_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Movie"
    },

    name: {
      type: String,
      required: true
    },

    text: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const Command = mongoose.model("Command", commandSchema);
