import express from "express";

const router = express.Router();

import {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  updateOrderStatus,
} from "../controllers/orderController.js";
import { auth, isSales } from "../middlewares/auth.js";

router.route("/").get(getOrders).post(auth, isSales, createOrder);
router
  .route("/:id")
  .get(getOrderById)
  .put(auth, isSales, updateOrder)
  .delete(deleteOrder);
router.route("/:id/status").put(auth, isSales, updateOrderStatus);

export default router;
