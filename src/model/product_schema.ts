import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  desc: { type: String, required: true },
});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
