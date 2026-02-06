import mongoose, { Schema } from "mongoose";

const embeddedMovies = new Schema({
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

  genres: {
    type: [String]
  },

  countries: {
    type: [String]
  },

  cast: {
    type: [String]
  },

  directors: {
    type: [String]
  },

  languages: {
    type: [String]
  },

  plot: {
    type: String
  },

  fullplot: {
    type: String
  },

  imdb: {
    id: Number,
    rating: Schema.Types.Mixed, // number OR string
    votes: Schema.Types.Mixed
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

  runtime: Number,

  poster: String,

  rated: String,

  released: Date,

    num_mflix_comments: Number,

    lastupdated: String
  },
  {
    collection: "movies", // Atlas collection name
    versionKey: false
  });

export const Movie = mongoose.model("embeddedMovies", embeddedMovies);