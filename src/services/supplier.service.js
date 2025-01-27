import { SupplierDal } from '../dal/supplier.dal.js';

export class SupplierService {
  static async createSupplier(supplierData) {
    return SupplierDal.createSupplier(supplierData);
  }

  static async getSuppliers() {
    return SupplierDal.getSuppliers();
  }

  static async getSupplierById(supplierId) {
    return SupplierDal.getSupplierById(supplierId);
  }

  static async getSupplierByPhone(phoneNumber) {
    return SupplierDal.getSupplierByPhone(phoneNumber);
  }

  static async updateSupplier(supplierId, updateData) {
    return SupplierDal.updateSupplier(supplierId, updateData);
  }

  static async deleteSupplier(supplierId) {
    return SupplierDal.deleteSupplier(supplierId);
  }
}