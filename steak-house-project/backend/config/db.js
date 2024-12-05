import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Success");
  } catch (error) {
    console.error("Connecion error:", error.message);
    process.exit(1); 
  }
};
