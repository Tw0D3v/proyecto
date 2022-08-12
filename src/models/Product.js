import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    price: Number,
    imgURL: String,
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model("Product", productSchema);
