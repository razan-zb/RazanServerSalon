import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: true,
    },
    productsSupplied: [
      {
        productName: { type: String, required: true },
        quantity: { type: Number, required: false },
      },
    ],
    notes: {
      type: String,
      required: false, // Additional details about the supplier
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier;