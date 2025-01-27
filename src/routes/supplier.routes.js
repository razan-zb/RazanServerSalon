import { Router } from 'express';
import { SupplierController } from '../controllers/supplier.controller.js';

const router = Router();

router.post('/create', SupplierController.createSupplier);
router.get('/', SupplierController.getSuppliers);
router.get('/:supplierId', SupplierController.getSupplierById);
router.get('/phone/:phoneNumber', SupplierController.getSupplierByPhone);
router.put('/:supplierId', SupplierController.updateSupplier);
router.delete('/:supplierId', SupplierController.deleteSupplier);

export default router;