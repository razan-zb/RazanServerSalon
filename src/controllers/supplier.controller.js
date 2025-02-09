import { SupplierService } from '../services/supplier.service.js';

export class SupplierController {
  static async createSupplier(req, res) {
    try {
      const supplierData = req.body;
      const supplier = await SupplierService.createSupplier(supplierData);
      return res.status(201).json(supplier);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to create supplier', error });
    }
  }

  static async getSuppliers(req, res) {
    try {
      const suppliers = await SupplierService.getSuppliers();
      return res.json(suppliers);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to fetch suppliers', error });
    }
  }

  static async getSupplierById(req, res) {
    try {
      const supplierId = req.params.supplierId;
      const supplier = await SupplierService.getSupplierById(supplierId);
      if (!supplier) {
        return res.status(404).json({ message: 'Supplier not found' });
      }
      return res.json(supplier);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to fetch supplier', error });
    }
  }

  static async getSupplierByPhone(req, res) {
    try {
      const phoneNumber = req.params.phoneNumber;
      const supplier = await SupplierService.getSupplierByPhone(phoneNumber);
      if (!supplier) {
        return res.status(404).json({ message: 'Supplier not found' });
      }
      return res.json(supplier);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to fetch supplier', error });
    }
  }

  static async updateSupplier(req, res) {
    try {
      const supplierId = req.params.supplierId;
      const updateData = req.body;
      const updatedSupplier = await SupplierService.updateSupplier(supplierId, updateData);
      if (!updatedSupplier) {
        return res.status(404).json({ message: 'Supplier not found' });
      }
      return res.json(updatedSupplier);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to update supplier', error });
    }
  }

  static async deleteSupplier(req, res) {
    try {
      const supplierId = req.params.supplierId;
      const result = await SupplierService.deleteSupplier(supplierId);
      if (!result) {
        return res.status(404).json({ message: 'Supplier not found' });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: 'Failed to delete supplier', error });
    }
  }
}