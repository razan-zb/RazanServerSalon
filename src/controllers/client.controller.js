import { ClientService } from '../services/client.service.js';
import nodemailer from 'nodemailer';
import 'dotenv/config';

export class ClientController {
  static async createClient(req, res) {
    try {

      const clientData = req.body;
      const client = await ClientService.createClient(clientData);
      return res.status(201).json(client);
    } catch (error) {
      console.error('Error creating client:', error);
      return res.status(500).json({ message: 'Failed to create client', error: error.message });
    }
  }

  static async getClients(req, res) {
    try {
      const { page = 1, limit = 10, sortBy = 'name', order = 'asc' } = req.query;
      const clients = await ClientService.getClients({ page, limit, sortBy, order });
      return res.json(clients);
    } catch (error) {
      console.error('Error fetching clients:', error);
      return res.status(500).json({ message: 'Failed to fetch clients', error: error.message });
    }
  }

  static async sendEmail(req, res) {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: subject || 'New Contact Message',
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).send({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).send({ success: false, message: 'Failed to send email', error: error.message });
    }
  }

  static async getClientByEmail(req, res) {
    try {
      const clientEmail = req.params.clientEmail;
      const client = await ClientService.getClientByEmail(clientEmail);
      if (!client) {
        return res.status(404).json({ message: 'Client not found' });
      }
      return res.json(client);
    } catch (error) {
      console.error('Error fetching client by email:', error);
      return res.status(500).json({ message: 'Failed to fetch client by email', error: error.message });
    }
  }

  static async getClientByPhone(req, res) {
    try {
      const clientPhone = req.params.clientPhone;
      const client = await ClientService.getClientByPhone(clientPhone);
      if (!client) {
        return res.status(404).json({ message: 'Client not found' });
      }
      return res.json(client);
    } catch (error) {
      console.error('Error fetching client by phone:', error);
      return res.status(500).json({ message: 'Failed to fetch client by phone', error: error.message });
    }
  }

  static async updateClient(req, res) {
    try {
      const clientPhone = req.params.clientPhone;
      const updateData = req.body;
      const updatedClient = await ClientService.updateClient(clientPhone, updateData);
      if (!updatedClient) {
        return res.status(404).json({ message: 'Client not found' });
      }
      return res.json(updatedClient);
    } catch (error) {
      console.error('Error updating client:', error);
      return res.status(500).json({ message: 'Failed to update client', error: error.message });
    }
  }

  static async deleteClient(req, res) {
    try {
      const clientPhone = req.params.clientPhone;
      const result = await ClientService.deleteClient(clientPhone);
      if (!result) {
        return res.status(404).json({ message: 'Client not found' });
      }
      return res.status(204).send();
    } catch (error) {
      console.error('Error deleting client:', error);
      return res.status(500).json({ message: 'Failed to delete client', error: error.message });
    }
  }
}