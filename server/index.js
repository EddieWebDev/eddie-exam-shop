const express = require("express");
const db = require("./db");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

// ---------------------------------------------------------------------------------------------LOGIN
app.post("/login", (req, res) => {
  const { firstname, lastname, username, password } = req.body;

  db.registerUser(firstname, lastname, username, password, (error) => {
    if (error) {
      console.log(error);
    }
  });
  res.send();
});

app.get("/users", (req, res) => {
  db.getAccounts((error, accounts) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      res.send(accounts);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
