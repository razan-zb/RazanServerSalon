import { AppointmentService } from '../services/appointment.service.js';

export class AppointmentController {
  static async createAppointment(req, res) {
    try {
      const appointmentData = req.body;
      const appointment = await AppointmentService.createAppointment(appointmentData);
      return res.status(201).json(appointment);
    } catch (error) {
      console.error('Error creating appointment:', error);
      return res.status(500).json({ message: 'Failed to create appointment', error: error.message });
    }
  }

  static async getAppointments(req, res) {
    try {
      const appointments = await AppointmentService.getAppointments();
      return res.json(appointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      return res.status(500).json({ message: 'Failed to fetch appointments', error: error.message });
    }
  }

  static async getAppointmentById(req, res) {
    try {
      const appointmentId = req.params.appointmentId;
      const appointment = await AppointmentService.getAppointmentById(appointmentId);
      if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
      return res.json(appointment);
    } catch (error) {
      console.error('Error fetching appointment by ID:', error);
      return res.status(500).json({ message: 'Failed to fetch appointment', error: error.message });
    }
  }

  static async getAppointmentsByDate(req, res) {
    try {
      const { date } = req.query;
      const appointments = await AppointmentService.getAppointmentsByDate(date);
      return res.json(appointments);
    } catch (error) {
      console.error('Error fetching appointments by date:', error);
      return res.status(500).json({ message: 'Failed to fetch appointments by date', error: error.message });
    }
  }

  static async getAppointmentsByClient(req, res) {
    try {
      const clientId = req.params.clientId;
      const appointments = await AppointmentService.getAppointmentsByClient(clientId);
      return res.json(appointments);
    } catch (error) {
      console.error('Error fetching appointments for client:', error);
      return res.status(500).json({ message: 'Failed to fetch appointments for client', error: error.message });
    }
  }

  static async updateAppointment(req, res) {
    try {
      const appointmentId = req.params.appointmentId;
      const updateData = req.body;
      const updatedAppointment = await AppointmentService.updateAppointment(appointmentId, updateData);
      if (!updatedAppointment) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
      return res.json(updatedAppointment);
    } catch (error) {
      console.error('Error updating appointment:', error);
      return res.status(500).json({ message: 'Failed to update appointment', error: error.message });
    }
  }

  static async deleteAppointment(req, res) {
    try {
      const appointmentId = req.params.appointmentId;
      const result = await AppointmentService.deleteAppointment(appointmentId);
      if (!result) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
      return res.status(204).send();
    } catch (error) {
      console.error('Error deleting appointment:', error);
      return res.status(500).json({ message: 'Failed to delete appointment', error: error.message });
    }
  }
}