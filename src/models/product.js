import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    categotry: String,
    sizes: Array,
    deliveryInfo: String,
    onSale: String,
    priceDrop : Number,
    imageUrl: String
}, {timestamps : true})

const Product = mongoose.models.Products || mongoose.model("Products", ProductSchema);

export default Product;