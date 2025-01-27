import Client from '../db/models/clients.js';

export class ClientDal {
  static async createClient(clientData) {
    try {
      const client = new Client(clientData);
      return await client.save();
    } catch (error) {
      throw new Error(`Error creating client: ${error.message}`);
    }
  }

  static async getClients({ page = 1, limit = 10, sortBy = 'name', order = 'asc' }) {
    try {
      const skip = (page - 1) * limit;
      const sortOrder = order === 'asc' ? 1 : -1;
      return await Client.find().sort({ [sortBy]: sortOrder }).skip(skip).limit(limit);
    } catch (error) {
      throw new Error(`Error fetching clients: ${error.message}`);
    }
  }

  static async getClientByEmail(clientEmail) {
    try {
      return await Client.findOne({ email: clientEmail });
    } catch (error) {
      throw new Error(`Error fetching client by email: ${error.message}`);
    }
  }

  static async getClientByPhone(clientPhone) {
    try {
      return await Client.findOne({ phoneNumber: clientPhone });
    } catch (error) {
      throw new Error(`Error fetching client by phone: ${error.message}`);
    }
  }

  static async updateClient(phoneNumber, updateData) {
    return Client.findOneAndUpdate(
      { phoneNumber: phoneNumber },  // Query to find the client by phone
      updateData,              // Data to update
      { new: true,             // Return the updated document
        runValidators: true ,
        upsert: true, }  // Optional: run validators on the update
    );
  }

  static async deleteClient(phoneNumber) {
    try {
      const client = await Client.findOneAndDelete({ phoneNumber });
      if (!client) {
        throw new Error('Client not found');
      }
      return client;
    } catch (error) {
      throw new Error(`Error deleting client: ${error.message}`);
    }
  }

  static async getClientById(clientId) {
    try {
      return await Client.findById(clientId);
    } catch (error) {
      throw new Error(`Error fetching client by ID: ${error.message}`);
    }
  }
}