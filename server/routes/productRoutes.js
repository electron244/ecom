import express from "express";
import {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  getTopProducts,
  getProductsByCategory,
  deleteProduct,
} from "../controllers/productController.js";

import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

//USER ROUTES
router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.get("/top", getTopProducts);
router.get("/category/:name", getProductsByCategory);


//ADMIN ROUTES
router.put("/:id", protect, authorizeRoles("admin"), updateProduct);
router.post("/", protect, authorizeRoles("admin"), createProduct);
router.delete("/:id", protect, authorizeRoles("admin"), deleteProduct);

export default router;
