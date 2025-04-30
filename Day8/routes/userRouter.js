const path = require("path");
const express = require("express");
const userRouter = express.Router();
const rootDir = require("../utils/pathUtil"); // Import the path utility module

userRouter.get("/", function (req, res, next) {
  res.sendFile(path.join(rootDir, "views", "home.html")); // Send a response to the client
});

module.exports = userRouter;
