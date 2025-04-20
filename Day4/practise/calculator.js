const sumRequest = require("./sum.js");
function handleCalculation(req, res) {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write(`<div>
            <h1>Welcome back</h1>
            <a href="/calculator">calculate</a>
            </div >`);
    res.end();
  } else if (req.url === "/calculator") {
    res.write(`<form action="/calculate-result" method="POST">
            <input type="number" name="num1" placeholder="Enter first number" required>
            <input type="number" name="num2" placeholder="Enter second number" required>
            <button type="submit">Calculate</button>
        </form>`);
    res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    sumRequest(req, res);
  } else {
    res.write(`<h1>404 Not Found</h1>
        <p>The page you are looking for does not exist
        <a href='/'>Go to home</a>`);
    res.end();
  }
}

module.exports = handleCalculation;
