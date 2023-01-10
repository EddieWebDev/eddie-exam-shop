import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getUserByEmail } from "../queries/users.js";

const router = express.Router();

//Login a user
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
    return res.status(404).send("No user found");
  }
  if (await bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: process.env.ACCESS_TOKEN_EXPIRATION_TIME});
    res.cookie("token", accessToken, {
        httpOnly: true,
    }).send("Logged in");
  } else {
    return res.status(403).send("Wrong password");
  }
});

export default router;
