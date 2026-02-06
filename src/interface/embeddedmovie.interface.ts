export interface embeddedMovies{

    title:String,
    year:Number,
    type:String,
    genres:String[],
    countries:String[],
    cast:String[],
    directors:String[],
    languages:String[],
    plot:String,
    fullplot:String,
    imdb:{
        id:Number,
        rating:String | Number,
        votes:String | Number
    },
    awards:{
        wins:Number,
        nominations:Number,
        text:String
    }
    tomatoes:{
        viewer:{
            rating:Number,
            numReviews:Number,
            meter:Number
        }
        critic:{
            rating:Number,
            numReviews:Number,
            meter:Number
        },
        lastUpdated:Date
    }
    runtime:Number,
    poster:String,
    rated:String,
    released:Date,
      num_mflix_comments?: number;
  lastupdated?: string;

}