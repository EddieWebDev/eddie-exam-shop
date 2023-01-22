import express from "express";
import { authenticateAdminToken } from "../utils/jwtAuth.js";
import {
  getCategories,
  getCategory,
  createCategory,
  deleteCategory,
} from "../queries/categories.js";

const router = express.Router();

//Get all categories
router.get("/", async (req, res) => {
  const categories = await getCategories();
  res.send(categories);
});

//Get a category
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const category = await getCategory(id);
  if (!category) {
    return res.status(404).send(`No category with id ${id} found`);
  }
  res.send(category);
});

//Create a category
router.post("/", async (req, res) => {
  const { category_name, category_img_url } = req.body;
  const newCategory = await createCategory(category_name, category_img_url);
  res.status(201).send(newCategory);
});

//Delete a category
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await deleteCategory(id);
  if (result.affectedRows === 0) {
    return res.status(404).send(`No category with id ${id} found`);
  }
  res.status(200).send(`Category with id ${id} deleted`);
});

export default router;
