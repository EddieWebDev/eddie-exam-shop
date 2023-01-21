import { pool } from "../database.js";

export const getProducts = async () => {
  const [products] = await pool.query("SELECT * FROM products");
  return products;
};

export const getProduct = async (id) => {
  const [product] = await pool.query(`SELECT * FROM products WHERE id = ?`, [
    id,
  ]);
  return product[0];
};

export const getProductsByCategory = async (category) => {
  const [products] = await pool.query(
    `SELECT * FROM products WHERE category = ?`,
    [category]
  );
  return products;
};

export const createProduct = async (
  productname,
  category,
  description,
  price,
  stock
) => {
  const [result] = await pool.query(
    `INSERT INTO products (productname, category, description, price, stock)
      VALUES(?,?,?,?,?)
      `,
    [productname, category, description, price, stock]
  );
  const id = result.insertId;
  return getProduct(id);
};

export const updateProduct = async (
  productname,
  category,
  description,
  price,
  stock,
  id
) => {
  await pool.query(
    `UPDATE products SET productname = ?, category = ?, description = ?, price = ?, stock = ? WHERE id = ?
      `,
    [productname, category, description, price, stock, id]
  );
  return getProduct(id);
};

export const updateProductStock = async (stock, id) => {
  await pool.query(
    `UPDATE products SET stock = ? WHERE id = ?
        `,
    [stock, id]
  );
  return getProduct(id);
};

export const deleteProduct = async (id) => {
  const [result] = await pool.query(
    `DELETE FROM products WHERE id = ?
      `,
    [id]
  );
  return result;
};

export const searchProduct = async (searchWord) => {
  const [result] = await pool.query(
    `SELECT * FROM products WHERE productname LIKE ?`,
    [`%${searchWord}%`]
  );
  return result;
};
