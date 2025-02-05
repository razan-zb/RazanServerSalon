import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
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
      required: false,
    },
    notes: {
      type: String,
      required: false, // Additional details about the supplier
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier;