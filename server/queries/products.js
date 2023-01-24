import { pool } from "../database.js";

// Get products
export const getProducts = async () => {
  const [products] = await pool.query("SELECT * FROM products");
  return products;
};

// Get product
export const getProduct = async (id) => {
  const [product] = await pool.query(`SELECT * FROM products WHERE id = ?`, [
    id,
  ]);
  return product[0];
};

// Get a product by category
export const getProductsByCategory = async (category) => {
  const [products] = await pool.query(
    `SELECT * FROM products WHERE category = ?`,
    [category]
  );
  return products;
};

// Create a product
export const createProduct = async (
  productname,
  category,
  description,
  product_img_url,
  price,
  stock
) => {
  const [result] = await pool.query(
    `INSERT INTO products (productname, category, description, product_img_url, price, stock)
      VALUES(?,?,?,?,?,?)
      `,
    [productname, category, description, product_img_url, price, stock]
  );
  const id = result.insertId;
  return getProduct(id);
};

// Update product
export const updateProduct = async (
  productname,
  category,
  description,
  product_img_url,
  price,
  stock,
  id
) => {
  await pool.query(
    `UPDATE products SET productname = ?, category = ?, description = ?, product_img_url = ?, price = ?, stock = ? WHERE id = ?
      `,
    [productname, category, description, product_img_url, price, stock, id]
  );
  return getProduct(id);
};

// Update product stock
export const updateProductStock = async (stock, id) => {
  const product = await getProduct(id);
  const newStock = product.stock - stock;

  await pool.query(
    `UPDATE products SET stock = ? WHERE id = ?
        `,
    [newStock, id]
  );
  return getProduct(id);
};

// Delete product
export const deleteProduct = async (id) => {
  const [result] = await pool.query(
    `DELETE FROM products WHERE id = ?
      `,
    [id]
  );
  return result;
};

// Search product
export const searchProduct = async (searchWord) => {
  const [result] = await pool.query(
    `SELECT * FROM products WHERE productname LIKE ?`,
    [`%${searchWord}%`]
  );
  return result;
};
