import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getUserByEmail, createUser } from "../queries/users.js";

const router = express.Router();

//Login a user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
    return res.status(404).send("No user found");
  }
  if (await bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign(
      { id: user.id, role: user.role },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRATION_TIME,
      }
    );
    const limitedUserInfo = { id: user.id, role: user.role };
    Object.assign(limitedUserInfo, jwt.decode(accessToken));
    res
      .cookie("token", accessToken, {
        httpOnly: true,
      })
      .send(limitedUserInfo);
  } else {
    return res.status(403).send("Wrong password");
  }
});

//Logout a user
router.post("/logout", (req, res) => {
  res.status(204).clearCookie("token").send("Logged out");
});

//Check token
router.post("/checktoken", (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.send(undefined);
  }

  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    res.send(user);
  } catch (err) {
    res.clearCookie("token");
    res.send(undefined);
  }
});

//Google login
router.post("/google/login", async (req, res) => {
  console.log("HALÅÅÅÅÅÅÅÅÅÅÅ");
  const { firstname, lastname, email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
    const newUser = await createUser(firstname, lastname, email, password);
    res.status(201).send(newUser);
  }

  const accessToken = jwt.sign(
    { id: user.id, role: user.role },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRATION_TIME,
    }
  );

  const limitedUserInfo = { id: user.id, role: user.role };

  Object.assign(limitedUserInfo, jwt.decode(accessToken));
  res
    .cookie("token", accessToken, {
      httpOnly: true,
    })
    .send(limitedUserInfo);
});

export default router;
