# Getting Started with Eddie Exam Shop

1. Start WAMP, MAMP or similar that use mysql and apache. You also need an up to date Node version to run the project => https://nodejs.org/en/download/.
2. Create a database in mysql named eddie-exam-shop-db.
3. Go to the .env file in the server folder and change the values to match your data base configuration.
4. Open a terminal and navigate to the server folder then type npm install.
5. Open a terminal and navigate to the server folder then type npm run dev, the data base tables should now be created and seen in the console log.
6. (OPTIONAL) Go to database.js in the server folder and uncomment the rows with populateProducts and populateCategories, it should be 4 lines in total.
7. (OPTIONAL) Since this project uses nodemon the server should restart but check the terminal to see if products and categories have been created.
8. (OPTIONAL) Go to database.js and comment out the rows with populateProducts and populateCategories, otherwise you will get errors for duplicate entries.
9. Open a terminal and navigate to the client folder then type npm install.
10. Open a terminal and navigate to the client folder then type npm start.
11. Unless you changed any port settings the server runs on port 3001 with a proxy to the client on port 3000. 
12. Go to http://localhost:3000/ in your browser.
13. Click on Login in the navbar to the top right.
14. Click "New user?" or log in with google (your email need to be pre authorized by me, Eddie, for google login to work).
15. Enter your user information and click "Create account".
16. You now need to set the user role to admin directly in the database if you want to access all features of the project.
17. Congratulations you are now ready to explore Eddie Exam Shop!

# Extra

1. If you want to create products i suggest png or other transparent image formats, the default products get their image urls from https://freepngimg.com/
2. The responsiveness of the project is tested on and should work for the screen resolutions 375x667 and 1920x1080. It is not tested on other resolutions but should work just fine.
3. This projet should be compatible with the following browsers config: 
    Chrome >= 73
    Firefox >= 78
    Edge >= 79
    Safari >= 12.0
    iOS >= 12.0
    opera >= 53