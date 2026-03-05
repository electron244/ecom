import express from "express";
import { 
  createProduct, 
  getAllProducts, 
  getSingleProduct,
  updateProduct
} from "../controllers/productController.js";

import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);

router.post("/", protect, authorizeRoles("admin"), createProduct);

router.put("/:id", protect, authorizeRoles("admin"), updateProduct);

export default router;