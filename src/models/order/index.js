
import mongoose from "mongoose";


const OrderScheme = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true
    },
    orderItems: [
        {
          qty: { type: Number, required: true },
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Products",
          },
        },
      ],
})