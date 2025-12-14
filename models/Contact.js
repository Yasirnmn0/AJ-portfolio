import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

// 👇 explicitly bind to "Aj-Portfolio" collection
export default mongoose.models.AjContact ||
  mongoose.model("AjContact", ContactSchema, "Aj-Portfolio");
