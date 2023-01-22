import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
import {
  createUsersTable,
  createProductsTable,
  createOrdersTable,
  createOrderProductsTable,
  createCategoriesTable,
} from "./queries/createTables.js";

export const pool = mysql
  .createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  .promise();

if (pool) {
  createUsersTable();
  createProductsTable();
  createOrdersTable();
  createOrderProductsTable();
  createCategoriesTable();
}
