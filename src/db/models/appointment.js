import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client', 
      required: true,
    },
    date: {
      type: Date,
      required: true, 
    },
    time: {
      type: String,
      required: true, // Time of the appointment
    },
    service: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['done', 'canceled', 'pending'], // Status of the appointment
      default: 'pending',
    },
    price: {
      type: Number,
      required: false,
    },
    notes: {
      type: String, 
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now, // Auto-set when the appointment is created
    },
    updatedAt: {
      type: Date,
      default: Date.now, // Auto-set or updated whenever the appointment is modified
    },
  },
  {
    timestamps: true, // Automatically manages `createdAt` and `updatedAt`
  }
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;