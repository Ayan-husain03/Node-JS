const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("Middleware function executed!");
  next(); // Call the next middleware or route handler
});

app.use(function (req, res, next) {
  console.log("Another middleware function executed!");
  console.log("Request method:", req.method);
  console.log("Request url:", req.url);
  next(); // Call the next middleware or route handler
});
// 4 point
// app.use(function (req, res, next) {
//     console.log('Third middleware function executed!');
//     res.send('Hello from the third middleware!');
// })

app.get("/", (req, res) => {
  console.log("Hello from the root route!", req.method, req.url);
  res.send("Hello from the root route!");
});

app.get("/contact-us", function (req, res) {
  console.log("Hello from the contact us route!", req.method, req.url);
  res.send(`<h1>please enter your details !</h1>
    <form action="/contact-us" method="POST">
        <input type="text" name="name" placeholder="Enter your name" required>
        <input type="email" name="email" placeholder="Enter your email" required>
        <button type="submit">Submit</button>
    </form>`);
});

app.post("/contact-us", function (req, res) {
  console.log(
    "Hello from the contact us route! POST method",
    req.method,
    req.url
  );
  res.send(`<h1>Thank you for your submission!</h1>`);
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
