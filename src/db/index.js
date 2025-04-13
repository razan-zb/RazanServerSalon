import mongoose from "mongoose";

// const connectDb = async () => {
//   mongoose.set("strictQuery", true);
//   await mongoose.connect("mongodb://localhost:27017/SewarApp");

// };

const connectDb = async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb+srv://razan:razan1811@cluster0.eugf2w6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
};

export { connectDb };
