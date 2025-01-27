import { Router } from 'express';
import { AppointmentController } from '../controllers/appointment.controller.js';

const router = Router();

// Create a new appointment
router.post('/create', AppointmentController.createAppointment);

// Get all appointments with optional filters (pagination, clientId, date)
router.get('/', AppointmentController.getAppointments);

// Get an appointment by ID
router.get('/:appointmentId', AppointmentController.getAppointmentById);

// Get appointments by a specific date
router.get('/date', AppointmentController.getAppointmentsByDate);

// Get appointments for a specific client
router.get('/client/:clientId', AppointmentController.getAppointmentsByClient);

// Update an appointment by ID
router.put('/update/:appointmentId', AppointmentController.updateAppointment);

// Delete an appointment by ID
router.delete('/delete/:appointmentId', AppointmentController.deleteAppointment);

export default router;