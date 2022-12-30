const express = require("express");
const db = require("./db");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

// ---------------------------------------------------------------------------------------------GET ALL USERS
app.get("/users", (req, res) => {
  db.getAccounts((error, accounts) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      res.send(accounts);
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

  db.createUser(firstname, lastname, username, password, (error) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log("user created");
    }
  });
});

// ---------------------------------------------------------------------------------------------UPDATE USER
app.put("/user", (req, res) => {
  console.log(req.body);
  const { firstname, lastname, username, password } = req.body;

  db.updateUser(firstname, lastname, username, password, (id = 1), (error, item) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else if (item.affectedRows === 0) {
      console.log("id does not exist, no user updated")
    } else {
      console.log("user updated");
    }
  });
});

// ---------------------------------------------------------------------------------------------GET USER BY ID
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;

  db.deleteUser(id, (error, item) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else if (item.affectedRows === 0) {
      console.log("id does not exist, no user deleted")
    } else {
      console.log("user deleted");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
