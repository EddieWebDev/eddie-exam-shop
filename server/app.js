import express from "express";
import userRoutes from "./routes/users.js";
import loginRoutes from "./routes/login.js";
import cookieParser from "cookie-parser";
import {authenticateToken} from "./utils/jwtAuth.js"

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cookieParser())

app.use("/api/users", authenticateToken, userRoutes);
app.use("/api/login", loginRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
