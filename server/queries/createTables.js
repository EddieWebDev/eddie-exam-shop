import { pool } from "../database.js";

export const createUsersTable = async () => {
  const response = await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        role VARCHAR(10),
        firstname VARCHAR(50),
        lastname VARCHAR(50),
        email VARCHAR(100),
        password VARCHAR(250),
        created TIMESTAMP NOT NULL DEFAULT NOW(),
        CONSTRAINT uniqeEmail UNIQUE(email)
        )
    `);
  if (response[0].warningStatus === 0) {
    console.log("Users table created");
  }
};

export const createProductsTable = async () => {
  const response = await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        productname VARCHAR(250),
        category VARCHAR(250),
        description VARCHAR(1000),
        product_img_url VARCHAR(1000),
        price INT,
        stock INT,
        created TIMESTAMP NOT NULL DEFAULT NOW(),
        CONSTRAINT uniqeProductname UNIQUE(productname)
        )
    `);
  if (response[0].warningStatus === 0) {
    console.log("Products table created");
  }
};

export const createOrdersTable = async () => {
  const response = await pool.query(`
    CREATE TABLE IF NOT EXISTS orders (
        id INT PRIMARY KEY AUTO_INCREMENT,
        user_id INT NOT NULL,
        total INT NOT NULL,
        status VARCHAR(50) NOT NULL,
        created TIMESTAMP NOT NULL DEFAULT NOW()
        )
    `);
  if (response[0].warningStatus === 0) {
    console.log("Orders table created");
  }
};

export const createOrderProductsTable = async () => {
  const response = await pool.query(`
    CREATE TABLE IF NOT EXISTS order_products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        order_id INT NOT NULL,
        product_id INT NOT NULL,
        product_name VARCHAR(50) NOT NULL,
        product_price INT NOT NULL,
        product_qty INT NOT NULL,
        FOREIGN KEY (order_id) REFERENCES Orders(id),
        FOREIGN KEY (product_id) REFERENCES Products(id)
        )
    `);
  if (response[0].warningStatus === 0) {
    console.log("OrderProducts table created");
  }
};

export const createCategoriesTable = async () => {
  const response = await pool.query(`
    CREATE TABLE IF NOT EXISTS categories (
        id INT PRIMARY KEY AUTO_INCREMENT,
        category_name VARCHAR(50) NOT NULL,
        category_img_url VARCHAR(1000),
        created TIMESTAMP NOT NULL DEFAULT NOW(),
        CONSTRAINT uniqeCategory_name UNIQUE(category_name)
        )
    `);
  if (response[0].warningStatus === 0) {
    console.log("Categories table created");
  }
};

export const populateProducts = async () => {
  const productsArray = [
    [
      "Banana",
      "Tropical Fruits",
      "A banana is a curved, yellow fruit with a thick skin and soft sweet flesh. If you eat a banana every day for breakfast, your roommate might nickname you the monkey",
      "https://freepngimg.com/thumb/banana/13-banana-png-image-bananas-picture-download.png",
      "10",
      "10",
    ],
    [
      "Coconut",
      "Tropical Fruits",
      "A coconut is a large, nut-like fruit that grows high in trees. Coconuts have very hard shells and sweet, white flesh inside.",
      "https://freepngimg.com/thumb/coconut/155912-green-coconut-organic-free-photo.png",
      "10",
      "10",
    ],
    [
      "Apple",
      "Core",
      "An apple is a round fruit with red or green skin and a whitish inside. One variety of apple might be sweet, another sour.",
      "https://freepngimg.com/thumb/fruit/80171-mcintosh-crisp-apple-pie-hq-image-free-png.png",
      "10",
      "10",
    ],
    [
      "Pear",
      "Core",
      "A pear is a sweet, juicy fruit which is narrow near its stalk, and wider and rounded at the bottom. Pears have white flesh and thin green or yellow skin.",
      "https://freepngimg.com/thumb/pear/131711-photos-pear-asian-hd-image-free.png",
      "10",
      "10",
    ],
    [
      "Watermelon",
      "Melons",
      "A watermelon is a plant that grows vines and flowers that ripen into large, juicy fruit also called watermelon. Cold watermelon is delicious at a backyard barbecue.",
      "https://freepngimg.com/thumb/watermelon/3-watermelon-png-image.png",
      "10",
      "10",
    ],
    [
      "Cantaloupe",
      "Melons",
      "A cantaloupe is a small melon with rough skin and orange flesh. If you are making fruit salad, don't forget the cantaloupe.",
      "https://freepngimg.com/thumb/cantaloupe/148860-cantaloupe-yellow-hq-image-free.png",
      "10",
      "10",
    ],
    [
      "Blackberry",
      "Berries",
      "Blackberry is a perennial, semi-deciduous, prickly, scrambling invasive plant. It is a semi-prostrate to almost-erect shrub, with arching and entangling stems arising from a woody crown and forms thickets up to several metres high. The root and crown system is the only perennial part of the plant.",
      "https://freepngimg.com/thumb/blackberry/11-2-blackberry-fruit-free-download-png.png",
      "10",
      "10",
    ],
    [
      "Grapes",
      "Berries",
      "A grape is a small, sweet fruit that grows in clusters on a vine. Most grapes are either purple or green, and they make a delicious addition to a fruit salad.",
      "https://freepngimg.com/thumb/grapes/36616-3-green-grapes.png",
      "10",
      "10",
    ],
  ];

  const productsResponse = await pool.query(
    `
    INSERT INTO products (productname, category, description, product_img_url, price, stock)
      VALUES ?
    `,
    [productsArray]
  );
  if (productsResponse[0].warningStatus === 0) {
    console.log("Products created");
  }
};

export const populateCategories = async () => {
  const categoriesArray = [
    ["Tropical Fruits", "https://freepngimg.com/thumb/fruit/8-2-fruit-png.png"],
    ["Core", "https://freepngimg.com/thumb/fruit/3-2-fruit-picture.png"],
    [
      "Melons",
      "https://freepngimg.com/thumb/watermelon/18-watermelon-png-image.png",
    ],
    ["Berries", "https://freepngimg.com/thumb/fruit/7-2-fruit-png-hd.png"],
  ];
  const categoriesResponse = await pool.query(
    `
    INSERT INTO categories (category_name, category_img_url)
      VALUES ?
    `,
    [categoriesArray]
  );

  if (categoriesResponse[0].warningStatus === 0) {
    console.log("Categories created");
  }
};
