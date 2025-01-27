import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema(
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
    birthday: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    fileOpeningDate: {
      type: Date,
      default: Date.now, 
    },
    hairType: {
      type: String,
      required: true,
    },
    naturalHairColor: {
      type: String,
      required: true,
    },
    problemsOrNotes: {
      // General notes or problems related to the client
      type: String,
      required: false,
    },
  },
  { timestamps: true } 
);

const Client = mongoose.model('Client', clientSchema);

export default Client;