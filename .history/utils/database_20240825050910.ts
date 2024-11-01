import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mongodb is already connected");
  }
  return;
};

try {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "Afrixpace",
  });
  isConnected = true;
  console.log("MongoDB connected");
} catch (error) {
  console.error(error);
}
