const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
    console.log("Middleware 1: Request received");
    next()
});
app.use("/", (req, res, next) => {
    console.log("Middleware 2: Processing request");
    res.send("Home Page");
});

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
