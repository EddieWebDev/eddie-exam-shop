import bcrypt from "bcrypt";
import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  searchUser,
} from "../queries/users.js";
import { authenticateAdminToken } from "../utils/jwtAuth.js";

const router = express.Router();

//Get all users
router.get("/", authenticateAdminToken, async (req, res) => {
  const users = await getUsers();
  res.send(users);
});

//Get a user
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await getUser(id);
  if (!user) {
    return res.status(404).send(`No user with id ${id} found`);
  }
  res.send(user);
});

//Create a user
router.post("/", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await createUser(firstname, lastname, email, hashedPassword);

  res.status(201).send(newUser);
});

//Update a user
router.put("/:id", authenticateAdminToken, async (req, res) => {
  const id = req.params.id;
  const { firstname, lastname, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const updatedUser = await updateUser(
    firstname,
    lastname,
    email,
    hashedPassword,
    id
  );
  if (!updatedUser) {
    return res.status(404).send(`No user with id ${id} found`);
  }
  res.send(updatedUser);
});

//Delete a user
router.delete("/:id", authenticateAdminToken, async (req, res) => {
  const id = req.params.id;
  const result = await deleteUser(id);
  if (result.affectedRows === 0) {
    return res.status(404).send(`No user with id ${id} found`);
  }
  res.status(200).send(`User with id ${id} deleted`);
});

//Search a user by email
router.get("/search/:searchword", authenticateAdminToken, async (req, res) => {
  const searchWord = req.params.searchword;
  const result = await searchUser(searchWord);
  const topFiveResults = result.slice(0, 5);
  res.send(topFiveResults);
});

export default router;
