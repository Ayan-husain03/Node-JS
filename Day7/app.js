const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(function (req, res, next) {
  console.log("Middleware function executed!");
  next(); // Call the next middleware or route handler
});
app.get("/", (req, res) => {
  console.log("Hello from the root route!", req.method, req.url);
  res.send(`
        <a href="/contact-us">Go to Contact Us</a>
    Hello from the root route!
    `);
});

app.get("/contact-us", function (req, res) {
  console.log("Hello from the contact us route!", req.method, req.url);
  res.send(`<h1>please enter your details !</h1>
        <a href="/">Go to Home</a>
        <form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Enter your name" required>
            <input type="email" name="email" placeholder="Enter your email" required>
            <button type="submit">Submit</button>
        </form>`);
});

app.use(bodyParser.urlencoded()); // Middleware to parse URL-encoded data

app.post("/contact-us", function (req, res) {
  console.log(
    "Hello from the contact us route! POST method",
    req.method,
    req.url
    );
    console.log("Received data:", req.body); // Log the received data
  res.send(`<h1>Thank you for your submission!</h1>`);
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
