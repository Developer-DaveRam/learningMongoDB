import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


export const db = async () => {
  try {
    await mongoose.connect(process.env.URL as string);
    if(mongoose.connection.readyState === 1){
      console.log("The Mongo Db Connected SucesFully")
    }else{
      console.log("Error in Connecting the mongo Db ")
    }
    
  } catch (error) {
    process.exit(1);
  }
};

