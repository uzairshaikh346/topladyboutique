import mongoose from "mongoose";

let isConnected = false; // Track connection

export const connectDB = async () => {
  if (isConnected) return;

  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("❌ MONGODB_URI environment variable is not defined");
    }
    await mongoose.connect(mongoUri, {
      dbName: "boutique", // apna db name yahan likho
    });
    isConnected = true;
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("❌ MongoDB Error: ", error);
  }
};
