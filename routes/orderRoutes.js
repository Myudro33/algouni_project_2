import express from "express";

const router = express.Router();

import {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";

router.route("/").get(getOrders).post(createOrder);
router.route("/:id").get(getOrderById).put(updateOrder).delete(deleteOrder);

export default router;
