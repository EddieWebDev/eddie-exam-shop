import { pool } from "../database.js";

export const getOrders = async () => {
  const [orders] = await pool.query("SELECT * FROM orders");
  return orders;
};

export const getOrder = async (id) => {
  const [order] = await pool.query(`SELECT * FROM orders WHERE id = ?`, [id]);
  return order[0];
};

export const createOrder = async (user_id, cartArray, status = 1) => {
  const [orderResult] = await pool.query(
    `INSERT INTO orders (user_id, status)
        VALUES(?,?)
        `,
    [user_id, status]
  );
  const order_id = orderResult.insertId;

  const cartItemsWithOrderId = cartArray.map(item => [order_id, ...item])

  const [orderProductsResult] = await pool.query(
    `INSERT INTO order_products (order_id, product_id, product_name, product_price, product_qty)
        VALUES(?)
        `,
    [cartItemsWithOrderId]
  )


  return getOrder(order_id);
};

export const createOrderProducts = async (
  order_id,
  product_id,
  product_qty,
  product_price
) => {
  
};
