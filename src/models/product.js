import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    categotry: String,
    sizes: Array,
    deliveryInfo: String,
})