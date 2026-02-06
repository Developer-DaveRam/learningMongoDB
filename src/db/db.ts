import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const db = async () => {
  try {
    await mongoose.connect(process.env.URL as string);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

 
mongoose.connection.on("error", (err) => {
  console.error("Mongoose error:", err);
});

// mongoose.connection.on("disconnected", () => {
//   console.log("⚠️ MongoDB disconnected");
// });
