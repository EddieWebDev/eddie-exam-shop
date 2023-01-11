import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getUserByEmail } from "../queries/users.js";

const router = express.Router();

//Login a user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
    return res.status(404).send("No user found");
  }
  if (await bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign({}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: process.env.ACCESS_TOKEN_EXPIRATION_TIME});
    Object.assign(user, jwt.decode(accessToken))
    res.cookie("token", accessToken, {
        httpOnly: true,
    }).send(user);
  } else {
    return res.status(403).send("Wrong password");
  }
});

//Logout a user
router.post("/logout", (req, res) => {
  res.status(204).clearCookie("token").send("Logged out")
})

export default router;
