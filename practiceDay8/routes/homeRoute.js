const express = require("express");
const path = require("path"); // Import the path module for file path handling
const rootDir = require("../utils/pathUtils"); // Import the path utility module
const homeRouter = express.Router();

homeRouter.get("/", function (req, res, next) {
    res.sendFile(path.join(rootDir, "views", "home.html")); // Send the home.html file as a response
});

module.exports = homeRouter;