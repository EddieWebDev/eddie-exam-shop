import { pool } from "../database.js";

export const getUsers = async () => {
  const [users] = await pool.query("SELECT * FROM users");
  return users;
};

export const getUser = async (id) => {
  const [user] = await pool.query(`SELECT * FROM users WHERE id = ?`, [id]);
  return user[0];
};

export const createUser = async (firstname, lastname, email, password) => {
  const [result] = await pool.query(
    `INSERT INTO users (firstname, lastname, email, password)
      VALUES(?,?,?,?)
      `,
    [firstname, lastname, email, password]
  );
  const id = result.insertId;
  return getUser(id);
};

export const updateUser = async (firstname, lastname, email, password, id) => {
  await pool.query(
    `UPDATE users SET firstname = ?, lastname = ?, email = ?, password = ? WHERE id = ?
      `,
    [firstname, lastname, email, password, id]
  );
  return getUser(id);
};

export const deleteUser = async (id) => {
  const [result] = await pool.query(
    `DELETE FROM users WHERE id = ?
      `,
    [id]
  );
  return result;
};
