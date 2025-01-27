import Supplier from '../db/models/supplier.js';

export class SupplierDal {
  static async createSupplier(supplierData) {
    const supplier = new Supplier(supplierData);
    return supplier.save();
  }

  static async getSuppliers() {
    return Supplier.find();
  }

  static async getSupplierById(supplierId) {
    return Supplier.findById(supplierId);
  }

  static async getSupplierByPhone(phoneNumber) {
    return Supplier.findOne({ phoneNumber });
  }

  static async updateSupplier(supplierId, updateData) {
    return Supplier.findByIdAndUpdate(supplierId, updateData, {
      new: true,
      runValidators: true,
    });
  }

  static async deleteSupplier(supplierId) {
    return Supplier.findByIdAndDelete(supplierId);
  }
}