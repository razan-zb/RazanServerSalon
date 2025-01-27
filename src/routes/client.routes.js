import { Router } from 'express';
import { ClientController } from '../controllers/client.controller.js';

const router = Router();

// Create a new client
router.post('/create', ClientController.createClient);

// Get all clients with optional pagination and sorting
router.get('/', ClientController.getClients);

// Get a client by email
router.get('/email/:clientEmail', ClientController.getClientByEmail);

// Get a client by phone number
router.get('/phone/:clientPhone', ClientController.getClientByPhone);

// Update a client by phone number
router.put('/update/:clientPhone', ClientController.updateClient);

// Delete a client by phone number
router.delete('/delete/:clientPhone', ClientController.deleteClient);

// Send an email
router.post('/send-email', ClientController.sendEmail);

export default router;