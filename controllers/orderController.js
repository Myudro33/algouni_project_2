import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getOrders = async (req, res) => {
  try {
    const orders = await prisma.orders.findMany({
      include: {
        payment_status: true,
      },
    });
    res.status(200).json({ message: "orders fetched", data: orders });
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" });
  }
};
export const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await prisma.orders.findUnique({
      where: { id: parseInt(id) },
      include: {
        payment_status: true,
      },
    });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order fetched", data: order });
  } catch (error) {
    res.status(500).json({ message: "Error fetching order" });
  }
};

export const createOrder = async (req, res) => {
  try {
    const order = await prisma.orders.create({
      data: req.body,
    });
    res.status(201).json({ message: "Order created", data: order });
  } catch (error) {
    res.status(500).json({ message: "Error creating order" });
  }
};
export const updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await prisma.orders.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.status(200).json({ message: "Order updated", data: order });
  } catch (error) {
    res.status(500).json({ message: "Error updating order" });
  }
};

export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await prisma.orders.delete({
      where: { id: parseInt(id) },
    });
    res.status(200).json({ message: "Order deleted", data: order });
  } catch (error) {
    res.status(500).json({ message: "Error deleting order" });
  }
};
