import express from "express";
import clientRoutes from "./client.routes.js";
import appointmentRoutes from "./appointment.routes.js";
import suppliersRoutes from "./supplier.routes.js";
import goodsRoutes from "./goods.routes.js";
import userRoutes from "./user.routes.js";

const router = express.Router();
router.use("/api/clients/", clientRoutes);
router.use("/api/appointments/", appointmentRoutes);
router.use("/api/suppliers/", suppliersRoutes);
router.use("/api/goods/", goodsRoutes);
router.use("/api/user/", userRoutes);

export default router;
 