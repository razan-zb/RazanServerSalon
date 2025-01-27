import mongoose from 'mongoose';

const goodsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Supplier', // Reference to the Supplier model
      required: false, // Optional if the supplier is not always associated
    },
    price: {
      type: Number,
      required: true,
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