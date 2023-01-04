require('dotenv').config()
const express = require("express");
const db = require("./db");

const PORT = process.env.PORT || 3001;

const app = express();

/* app.use((req, res, next) => {
  console.log(req.path, req,method)
  next()
}) */
app.use(express.json());

// ---------------------------------------------------------------------------------------------GET ALL USERS
app.get("/users", (req, res) => {
  db.getUsers((error, users) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.send(users);
    }
  });
});

// ---------------------------------------------------------------------------------------------GET USER BY ID
app.get("/user/:id", (req, res) => {
  const { id } = req.params;

  db.getUserById(id, (error, user) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.send(user);
    }
  });
});

// ---------------------------------------------------------------------------------------------CREATE USER
app.post("/user", (req, res) => {
  const { firstname, lastname, username, password } = req.body;

  try {
    let result = db.createUser(firstname, lastname, username, password)
    res.json(result)
  } catch(e) {
    console.log(e)
    res.sendStatus(500)
  }
});


// ---------------------------------------------------------------------------------------------UPDATE USER
app.put("/user", (req, res) => {
  
  const { firstname, lastname, username, password, id } = req.body;
  try {
    let result = db.updateUser(
      firstname,
      lastname,
      username,
      password,
      id
    );
    console.log(res.json(result));
    res.json(result);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

// ---------------------------------------------------------------------------------------------GET USER BY ID
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;

  db.deleteUser(id, (error, item) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else if (item.affectedRows === 0) {
      console.log("id does not exist, no user deleted");
    } else {
      console.log("user deleted");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
