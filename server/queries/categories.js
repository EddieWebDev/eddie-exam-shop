import { pool } from "../database.js";

// Get categories
export const getCategories = async () => {
  const [categories] = await pool.query(
    "SELECT * FROM categories ORDER BY category_name"
  );
  return categories;
};

// Get category
export const getCategory = async (id) => {
  const [category] = await pool.query(`SELECT * FROM categories WHERE id = ?`, [
    id,
  ]);
  return category[0];
};

// Create category
export const createCategory = async (category_name, category_img_url) => {
  const [result] = await pool.query(
    `INSERT INTO categories (category_name, category_img_url)
        VALUES(?,?)
        `,
    [category_name, category_img_url]
  );
  const id = result.insertId;
  return getCategory(id);
};

// Delete category
export const deleteCategory = async (id) => {
  const [result] = await pool.query(
    `DELETE FROM categories WHERE id = ?
        `,
    [id]
  );
  return result;
};
