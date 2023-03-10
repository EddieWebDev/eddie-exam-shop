import { pool } from "../database.js";

// Get orders
export const getOrders = async () => {
  const [orders] = await pool.query("SELECT * FROM orders");
  return orders;
};

// Get order
export const getOrder = async (id) => {
  const [order] = await pool.query(
    `SELECT p.order_id, o.total, o.status, product_id, product_name, product_price, product_qty FROM orders o 
  JOIN order_products p ON o.id = p.order_id
  WHERE p.order_id = ?`,
    [id]
  );
  return order;
};

// Get a users orders
export const getUserOrders = async (id) => {
  const [userOrders] = await pool.query(
    `SELECT p.order_id, o.total, o.status, product_id, product_name, product_price, product_qty FROM orders o
    JOIN order_products p ON o.id = p.order_id
    WHERE o.user_id = ?`,
    [id]
  );

  const orders = new Map();

  userOrders.forEach((order) => {
    const orderid = order.order_id;
    if (!orders.has(orderid)) {
      orders.set(orderid, []);
    }
    orders.get(orderid).push(order);
  });

  const ordersArray = Array.from(orders.values());

  return ordersArray;
};

// Create order
export const createOrder = async (
  user_id,
  cart,
  total,
  status = "Processing"
) => {
  const [orderResult] = await pool.query(
    `INSERT INTO orders (user_id, total, status)
        VALUES(?,?,?)
        `,
    [user_id, total, status]
  );
  const order_id = await orderResult.insertId;

  const cartArray = await cart.map((item) => Object.values(item));

  const cartItemsWithOrderId = await cartArray.map((item) => [
    order_id,
    ...item,
  ]);

  const [orderProductsResult] = await pool.query(
    `INSERT INTO order_products (order_id, product_id, product_name, product_price, product_qty)
        VALUES ?
        `,
    [cartItemsWithOrderId]
  );

  return getOrder(order_id);
};

// Update order status
export const updateOrderStatus = async (status, id) => {
  await pool.query(
    `UPDATE orders SET status = ? WHERE id = ?
        `,
    [status, id]
  );
  return getOrder(id);
};

// Delete order
export const deleteOrder = async (id) => {
  const [result] = await pool.query(
    `DELETE FROM orders WHERE id = ?
      `,
    [id]
  );
  return result;
};
