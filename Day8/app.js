const express = require("express");
const path = require("path"); // Import the path module for file path handling
const userRouter = require("./routes/userRouter"); // Import the userRouter module
const hostRouter = require("./routes/hostRouter"); // Import the hostRouter module
const rootDir = require("./utils/pathUtil"); // Import the path utility module

const app = express();


app.use(express.urlencoded()); // Middleware to parse URL-encoded data

app.use(userRouter);
app.use("/host", hostRouter);
app.use(function (req, res, next) {
  res.sendFile(path.join(rootDir, "views", "404.html")); // Send the 404.html file as a response
});

const port = 5001;
app.listen(port, function () {
  console.log(`Server is running on port http://localhost:${port}`);
});
