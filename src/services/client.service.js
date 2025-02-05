import { ClientDal } from '../dal/client.dal.js';

export class ClientService {
  static async createClient(clientData) {
    return ClientDal.createClient(clientData);
  }

  static async getClients({ page = 1, limit = 10, sortBy = 'name', order = 'asc' }) {
    return ClientDal.getClients({ page, limit, sortBy, order });
  }

  static async getClientByEmail(clientEmail) {
    return ClientDal.getClientByEmail(clientEmail);
  }

  static async getClientByPhone(clientPhone) {
    return ClientDal.getClientByPhone(clientPhone);
  }

  static async getClientById(clientId) {
    return ClientDal.getClientById(clientId);
  }

  static async updateClient(clientPhone, updateData) {
    return ClientDal.updateClient(clientPhone, updateData);
  }

  static async deleteClient(clientPhone) {
    return ClientDal.deleteClient(clientPhone);
  }
}