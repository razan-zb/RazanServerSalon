import { AppointmentDal } from '../dal/appointment.dal.js';

export class AppointmentService {
  static async createAppointment(appointmentData) {
    return AppointmentDal.createAppointment(appointmentData);
  }

  static async getAppointments() {
    return AppointmentDal.getAppointments();
  }

  static async getAppointmentById(appointmentId) {
    return AppointmentDal.getAppointmentById(appointmentId);
  }

  static async getAppointmentsByDate(date) {
    return AppointmentDal.getAppointmentsByDate(date);
  }

  static async getAppointmentsByClient(clientId) {
    return AppointmentDal.getAppointmentsByClient(clientId);
  }

  static async updateAppointment(appointmentId, updateData) {
    return AppointmentDal.updateAppointment(appointmentId, updateData);
  }

  static async deleteAppointment(appointmentId) {
    return AppointmentDal.deleteAppointment(appointmentId);
  }
}