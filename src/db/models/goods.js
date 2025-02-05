import mongoose from 'mongoose';

const goodsSchema = new mongoose.Schema(
  {
    _id: {
    type: String,
    required: true,
    },
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: false,
    },
    notes: {
      type: String,
      required: false, // Additional details about the good
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Goods = mongoose.model('Goods', goodsSchema);

export default Goods;