// src/config/db.ts
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    console.log()
    await mongoose.connect(MONGO_URI || "");
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit the app if DB fails to connect
  }
};
