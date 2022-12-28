const mysql = require("mysql")

// Create database connection
const db = mysql.createConnection({
    host      : "localhost",
    user      : "root",
    password  : "",
    database  : "eddieshop"
  })
  
  // Connect to database 
  db.connect((err) => {
    if(err){
      console.log("Error connecting to database")
    }
    console.log("Connected to database")
    
})

// ---------------------------------------------------------------------------------------------CREATE USER TABLE
let createUsersTable =`
    CREATE TABLE IF NOT EXISTS accounts (
        id INT PRIMARY KEY AUTO_INCREMENT,
        firstname VARCHAR(250),
        lastname VARCHAR(250),
        username VARCHAR(250),
        password VARCHAR(250),
        CONSTRAINT uniqeUsername UNIQUE(username)
        )
`
db.query(createUsersTable, (err) => {
    if(err) {
    console.log("Error creating accounts table")
    }
})

// ---------------------------------------------------------------------------------------------CREATE PRODUCTS TABLE
let createProductsTable =`
    CREATE TABLE IF NOT EXISTS products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        productname VARCHAR(250),
        category VARCHAR(250),
        description VARCHAR(250),
        price INT,
        stock INT,
        CONSTRAINT uniqeProductname UNIQUE(productname)
        )
`
db.query(createProductsTable, (err) => {
    if(err) {
    console.log("Error creating products table")
    }
})

// ---------------------------------------------------------------------------------------------REGISTER USER
module.exports.registerUser = (firstname, lastname, username, password, callback) => {
    const query = `
        INSERT INTO accounts (
            firstname,
            lastname,
            username,
            password
        )
        VALUES
            (?,?,?,?)
    `

    const values = [
        firstname,
        lastname,
        username,
        password
    ]

    db.query(query, values, callback)
}

// ---------------------------------------------------------------------------------------------GET ALL USERS
module.exports.getAccounts = (callback) =>{
    const query = `
        SELECT * FROM accounts
    `
    
    db.query(query, callback)
}

