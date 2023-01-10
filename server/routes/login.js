import bcrypt from "bcrypt";
import express from "express";
import { getUserByEmail } from "../queries/users.js";

const router = express.Router();

//Login a user
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

  if (!user) {
    return res.status(404).send({ error: `No user with email ${email} found` });
  }
  if (await bcrypt.compare(password, user.password)) {
    res.send("Success");
  } else {
    res.send("Wrong password");
  }
});

export default router;
