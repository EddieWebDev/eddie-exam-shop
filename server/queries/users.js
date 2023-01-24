import { pool } from "../database.js";

// Get users
export const getUsers = async () => {
  const [users] = await pool.query("SELECT * FROM users");
  return users;
};

// Get a user
export const getUser = async (id) => {
  const [user] = await pool.query(`SELECT * FROM users WHERE id = ?`, [id]);
  return user[0];
};

// Get a user by email
export const getUserByEmail = async (email) => {
  const [user] = await pool.query(`SELECT * FROM users WHERE email = ?`, [
    email,
  ]);
  return user[0];
};

// Create a user
export const createUser = async (
  firstname,
  lastname,
  email,
  password,
  role = "user"
) => {
  const [result] = await pool.query(
    `INSERT INTO users (role, firstname, lastname, email, password)
      VALUES(?,?,?,?,?)
      `,
    [role, firstname, lastname, email, password]
  );
  const id = result.insertId;
  return getUser(id);
};

// Update a user
export const updateUser = async (firstname, lastname, email, password, id) => {
  await pool.query(
    `UPDATE users SET firstname = ?, lastname = ?, email = ?, password = ? WHERE id = ?
      `,
    [firstname, lastname, email, password, id]
  );
  return getUser(id);
};

// Delete user
export const deleteUser = async (id) => {
  const [result] = await pool.query(
    `DELETE FROM users WHERE id = ?
      `,
    [id]
  );
  return result;
};

// Search user by email
export const searchUser = async (searchWord) => {
  const [result] = await pool.query(`SELECT * FROM users WHERE email LIKE ?`, [
    `%${searchWord}%`,
  ]);
  return result;
};
