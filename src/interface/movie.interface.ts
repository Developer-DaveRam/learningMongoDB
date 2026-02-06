export interface IMDB {
  id: Number;
  rating: Number;
  votes: Number;
}

export interface Awards {
  wins: Number;
  nominations: Number;
  text: String;
}

export interface Iviewer {
  rating: Number;
  numReviews: Number;
  meter: Number;
}


export interface  Icritic {
      rating: Number,
      numReviews: Number,
      meter: Number
    }


export interface ITomatoes  {
    viewers?:Iviewer,
    critic?:Icritic,
   lastUpdated: Date;
  };

export interface Movie {
  title: String;
  year: Number;
  type: String;
  countries: String[];
  cast: String[];
  directors: [String];
  writers: [String];
  genres: [String];
  languages: [String];
  plot: String;
  fullplot: String;
  imdb?: IMDB;
  awards?: Awards;
  tomatoes:ITomatoes;

  runtime:  Number;

  poster: String;

  rated: String;

  released: Date;

  metacritic:  Number;

  num_mflix_comments:Number;

  createdAt: Date;
}
