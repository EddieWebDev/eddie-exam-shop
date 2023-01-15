import { pool } from "../database.js";

export const createUsersTable = async () => {
  const response = await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        firstname VARCHAR(250),
        lastname VARCHAR(250),
        email VARCHAR(250),
        password VARCHAR(250),
        created TIMESTAMP NOT NULL DEFAULT NOW(),
        CONSTRAINT uniqeEmail UNIQUE(email)
        )
    `);
  if (response[0].warningStatus === 0) {
    console.log("Users table created");
  }
};

export const createProductsTable = async () => {
  const response = await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        productname VARCHAR(250),
        category VARCHAR(250),
        description VARCHAR(500),
        price INT,
        stock INT,
        created TIMESTAMP NOT NULL DEFAULT NOW(),
        CONSTRAINT uniqeProductname UNIQUE(productname)
        )
    `);
  if (response[0].warningStatus === 0) {
    console.log("Products table created");
  }
};

export const createOrdersTable = async () => {
  const response = await pool.query(`
    CREATE TABLE IF NOT EXISTS orders (
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT NOT NULL,
        status VARCHAR(250) NOT NULL,
        created TIMESTAMP NOT NULL DEFAULT NOW()
        )
    `);
  if (response[0].warningStatus === 0) {
    console.log("Orders table created");
  }
};

export const createOrderProductsTable = async () => {
  const response = await pool.query(`
    CREATE TABLE IF NOT EXISTS order_products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        order_id INT NOT NULL,
        product_id INT NOT NULL,
        product_name VARCHAR(250) NOT NULL,
        product_price INT NOT NULL,
        product_qty INT NOT NULL
        )
    `);
  if (response[0].warningStatus === 0) {
    console.log("OrderProducts table created");
  }
};
