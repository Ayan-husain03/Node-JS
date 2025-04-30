const express = require("express");
const path = require("path");
const rootDir = require("../utils/pathUtils"); // Import the path utility module
const contactRouter = express.Router(); // Create a new router instance

contactRouter.get("/contact-us", function (req, res, next) {
  res.sendFile(path.join(rootDir, "views", "contact-us.html")); // Send the contact.html file as a response
});

contactRouter.post("/contact-us", function (req, res, next) {
    console.log("user : ",req.body); // Log the form data to the console
    res.sendFile(path.join(rootDir, "views", "thankyou.html")); // Send the contact.html file as a response
});

module.exports = contactRouter; // Export the router for use in other modules