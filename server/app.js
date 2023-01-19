import express from "express";
import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/orders.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
import { authenticateToken } from "./utils/jwtAuth.js";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", authenticateToken, userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", authenticateToken, orderRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
