import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  year: {
    type: Number
  },

  type: {
    type: String
  },

  countries: [
    {
      type: String
    }
  ],

  cast: [
    {
      type: String
    }
  ],

  directors: [
    {
      type: String
    }
  ],

  writers: [
    {
      type: String
    }
  ],

  genres: [
    {
      type: String
    }
  ],

  languages: [
    {
      type: String
    }
  ],

  plot: {
    type: String
  },

  fullplot: {
    type: String
  },

  imdb: {
    id: Number,
    rating: Number,
    votes: Number
  },

  awards: {
    wins: Number,
    nominations: Number,
    text: String
  },

  tomatoes: {
    viewer: {
      rating: Number,
      numReviews: Number,
      meter: Number
    },
    critic: {
      rating: Number,
      numReviews: Number,
      meter: Number
    },
    lastUpdated: Date
  },

  runtime: {
    type: Number
  },

  poster: {
    type: String
  },

  rated: {
    type: String
  },

  released: {
    type: Date
  },

  metacritic: {
    type: Number
  },

  num_mflix_comments: {
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Movie = mongoose.model("Movie", movieSchema);
