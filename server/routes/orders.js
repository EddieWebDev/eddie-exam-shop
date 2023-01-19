import express from "express";
import {
  getOrders,
  getOrder,
  getUserOrders,
  createOrder,
  updateOrderStatus,
  deleteOrder,
} from "../queries/orders.js";
import { authenticateAdminToken } from "../utils/jwtAuth.js";

const router = express.Router();

//Get all orders
router.get("/", async (req, res) => {
  const orders = await getOrders();
  res.send(orders);
});

//Get an order
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const order = await getOrder(id);
  if (!order) {
    return res.status(404).send(`No order with id ${id} found`);
  }
  res.send(order);
});

//Get a users orders
router.get("/userorders/:id", async (req, res) => {
  const id = req.params.id;
  const userOrders = await getUserOrders(id);
  if (!userOrders) {
    return res.status(404).send(`No orders found`);
  }
  res.send(userOrders);
});

//Create an order
router.post("/:id", async (req, res) => {
  const user_id = req.params.id;
  const cart = req.body.cart;
  const total = req.body.total;
  const newOrder = await createOrder(user_id, cart, total);
  res.status(201).send(newOrder);
});

//Update an orders status
router.patch("/status/:id", authenticateAdminToken, async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  const updatedOrder = await updateOrderStatus(status, id);
  if (!updatedOrder) {
    return res.status(404).send(`No order with id ${id} found`);
  }
  res.send(updatedOrder);
});

//Delete an order
router.delete("/:id", authenticateAdminToken, async (req, res) => {
  const id = req.params.id;
  const result = await deleteOrder(id);
  if (result.affectedRows === 0) {
    return res.status(404).send(`No order with id ${id} found`);
  }
  res.status(200).send(`Order with id ${id} deleted`);
});

export default router;
