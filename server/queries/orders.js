import { pool } from "../database.js";

export const getOrders = async () => {
  const [orders] = await pool.query("SELECT * FROM orders");
  return orders;
};

export const getOrder = async (id) => {
  const [order] = await pool.query(
    `SELECT p.order_id, product_id, product_name, product_price, product_qty FROM orders o 
  JOIN order_products p ON o.id = p.order_id
  WHERE p.order_id = ?`,
    [id]
  );
  return order;
};

export const createOrder = async (user_id, cart, status = 1) => {
  const [orderResult] = await pool.query(
    `INSERT INTO orders (user_id, status)
        VALUES(?,?)
        `,
    [user_id, status]
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

export const updateOrderStatus = async (status, id) => {
  await pool.query(
    `UPDATE orders SET status = ? WHERE id = ?
        `,
    [status, id]
  );
  return getOrder(id);
};

export const deleteOrder = async (id) => {
  const [result] = await pool.query(
    `DELETE FROM orders WHERE id = ?
      `,
    [id]
  );
  return result;
};
