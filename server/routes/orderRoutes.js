import express from "express";
import {
  createOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
  updateOrderPayment,
  deleteOrder
} from "../controllers/orderController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/me", protect, getMyOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id/pay", protect, updateOrderPayment);

router.get("/", protect, authorizeRoles("admin"), getAllOrders);
router.put("/:id/status", protect, authorizeRoles("admin"), updateOrderStatus);
router.delete("/:id", protect, authorizeRoles("admin"), deleteOrder);

export default router;
