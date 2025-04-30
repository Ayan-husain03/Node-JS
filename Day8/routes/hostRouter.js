const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtil"); // Import the path utility module
const path = require("path"); // Import the path module for file path handling

hostRouter.get("/add-home", function (req, res, next) {
  res.sendFile(path.join(rootDir, "views", "add-home.html")); // Send the add-home.html file as a response
});

hostRouter.post("/add-home", function (req, res, next) {
  console.log("Received data:", req.body); // Log the received data
  res.sendFile(path.join(rootDir, "views", "home-added.html")); // Send the home.html file as a response
});

module.exports = hostRouter;
