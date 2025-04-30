const express = require("express");
const homeRouter = require("./routes/homeRoute");
const contactRouter = require("./routes/contact");
const rootDir = require("./utils/pathUtils"); // Import the path utility module
const path = require("path"); // Import the path module for file path handling
const app = express();

app.use(express.urlencoded())

app.use(function (req, res, next) {
  console.log("Request URL:", req.originalUrl);
  next();
});

app.use(homeRouter);
app.use(contactRouter);
app.use(function (req, res, next) {
  console.log("404 Error: Page not found");
  res.sendFile(path.join(rootDir, "views", "404.html")); // Send the 404.html file as a response
});

const port = 3000;
app.listen(port, function () {
  console.log(`Server is running on port http://localhost:${port}`);
});
