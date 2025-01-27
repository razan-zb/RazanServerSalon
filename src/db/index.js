import mongoose from "mongoose";

// const connectDb = async () => {
//   mongoose.set("strictQuery", true);
//   await mongoose.connect("mongodb://localhost:27017/SewarApp");

// };

const connectDb = async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb+srv://Razan:Razan1811@cluster0.qk3al.mongodb.net/?retryWrites=true");
};



export { connectDb };
