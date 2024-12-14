// Import mongoose
import mongoose from "mongoose";

// Create a function to connect to the db
const connectDB = async () => {
  try {
    console.log(`Attempting to connect to MongoDB...`);
    await mongoose.connect(process.env.DB_URL);
    console.log(`Connected to MongoDB!`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
