import express from "express";
import {
  getProducts,
  getProduct,
  getProductsByCategory,
  createProduct,
  updateProduct,
  updateProductStock,
  deleteProduct,
  searchProduct,
} from "../queries/products.js";
import { authenticateAdminToken } from "../utils/jwtAuth.js";

const router = express.Router();

//Get all products
router.get("/", async (req, res) => {
  const products = await getProducts();
  res.send(products);
});

//Get a product
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const product = await getProduct(id);
  if (!product) {
    return res.status(404).send(`No product with id ${id} found`);
  }
  res.send(product);
});

//Get product categories
router.get("/categories/all", async (req, res) => {
  const products = await getProducts();
  const categories = [...new Set(products.map((product) => product.category))];
  res.send(categories);
});

//Get products by category
router.get("/category/:category", async (req, res) => {
  const category = req.params.category;
  const products = await getProductsByCategory(category);
  if (!products) {
    return res.status(404).send(`No products with ${category} category found`);
  }
  res.send(products);
});

//Create a product
router.post("/", authenticateAdminToken, async (req, res) => {
  const { productname, category, description, price, stock } = req.body;
  const newProduct = await createProduct(
    productname,
    category,
    description,
    price,
    stock
  );
  res.status(201).send(newProduct);
});

//Update a product
router.put("/:id", authenticateAdminToken, async (req, res) => {
  const id = req.params.id;
  const { productname, category, description, price, stock } = req.body;
  const updatedProduct = await updateProduct(
    productname,
    category,
    description,
    price,
    stock,
    id
  );
  if (!updatedProduct) {
    return res.status(404).send(`No product with id ${id} found`);
  }
  res.send(updatedProduct);
});

//Update a product stock
router.patch("/stock/:id", async (req, res) => {
  const id = req.params.id;
  const { stock } = req.body;
  const updatedProduct = await updateProductStock(stock, id);
  if (!updatedProduct) {
    return res.status(404).send(`No product with id ${id} found`);
  }
  res.send(updatedProduct);
});

//Delete a product
router.delete("/:id", authenticateAdminToken, async (req, res) => {
  const id = req.params.id;
  const result = await deleteProduct(id);
  if (result.affectedRows === 0) {
    return res.status(404).send(`No product with id ${id} found`);
  }
  res.status(200).send(`Product with id ${id} deleted`);
});

//Search a product by name
router.get("/search/:searchword", async (req, res) => {
  const searchWord = req.params.searchword;
  const result = await searchProduct(searchWord);
  const topFiveResults = result.slice(0, 5);
  res.send(topFiveResults);
});

export default router;
