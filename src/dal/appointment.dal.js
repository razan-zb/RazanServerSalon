import Appointment from '../db/models/appointment.js';

export class AppointmentDal {
  // Create a new appointment
  static async createAppointment(appointmentData) {
    try {
      const appointment = new Appointment(appointmentData);
      return await appointment.save();
    } catch (error) {
      throw new Error(`Error creating appointment: ${error.message}`);
    }
  }

  // Get all appointments with optional filtering and pagination
  static async getAppointments({ page = 1, limit = 10, clientId = null, date = null }) {
    try {
      const query = {};
      if (clientId) query.client = clientId;
      if (date) query.date = date;

      const skip = (page - 1) * limit;
      return await Appointment.find(query)
        .populate('client', 'name phone') // Populates client info
        .skip(skip)
        .limit(limit);
    } catch (error) {
      throw new Error(`Error fetching appointments: ${error.message}`);
    }
  }

  // Get an appointment by its ID
  static async getAppointmentById(appointmentId) {
    try {
      return await Appointment.findById(appointmentId).populate('client', 'name phone');
    } catch (error) {
      throw new Error(`Error fetching appointment by ID: ${error.message}`);
    }
  }

  // Update an appointment
  static async updateAppointment(appointmentId, updateData) {
    try {
      const appointment = await Appointment.findById(appointmentId);
      if (!appointment) {
        throw new Error('Appointment not found');
      }
      return await Appointment.findByIdAndUpdate(appointmentId, updateData, {
        new: true, // Return the updated document
        runValidators: true, // Validate the update
      }).populate('client', 'name phone');
    } catch (error) {
      throw new Error(`Error updating appointment: ${error.message}`);
    }
  }

  // Delete an appointment
  static async deleteAppointment(appointmentId) {
    try {
      const appointment = await Appointment.findByIdAndDelete(appointmentId);
      if (!appointment) {
        throw new Error('Appointment not found');
      }
      return appointment;
    } catch (error) {
      throw new Error(`Error deleting appointment: ${error.message}`);
    }
  }

  // Get appointments by date
  static async getAppointmentsByDate(date) {
    try {
      return await Appointment.find({ date }).populate('client', 'name phone');
    } catch (error) {
      throw new Error(`Error fetching appointments by date: ${error.message}`);
    }
  }

  // Get all appointments for a specific client
  static async getAppointmentsByClient(clientId) {
    try {
      return await Appointment.find({ client: clientId }).populate('client', 'name phone');
    } catch (error) {
      throw new Error(`Error fetching appointments for client: ${error.message}`);
    }
  }
}