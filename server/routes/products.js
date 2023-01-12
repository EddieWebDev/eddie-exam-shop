import express from "express";
import {
  getProducts,
  getProduct,
  getProductsByCategory,
  createProduct,
  updateProduct,
  updateProductStock,
  deleteProduct,
} from "../queries/products.js";

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
router.post("/", async (req, res) => {
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
router.put("/:id", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await deleteProduct(id);
  if (result.affectedRows === 0) {
    return res.status(404).send(`No product with id ${id} found`);
  }
  res.status(200).send(`Product with id ${id} deleted`);
});

export default router;
