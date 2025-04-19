const http = require("http");

const server = http.createServer(function (req, res) {
  res.setHeader("content-type", "text/html");
  if (req.url === "/") {
    res.write(`
            <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <!-- You can link CSS or add meta tags here -->
    </head>
    <body>
    <nav>
  <a href="/">Home</a>
  <a href="/men">Men</a>
  <a href="/women">Women</a>
  <a href="/kids">Kids</a>
  <a href="/cart">Cart</a>
</nav>
      <h1>Welcome to home page</h1>
    </body>
    </html>
    
            `);
  } else if (req.url == "/men") {
    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <!-- You can link CSS or add meta tags here -->
</head>
<body>
<nav>
  <a href="/">Home</a>
  <a href="/men">Men</a>
  <a href="/women">Women</a>
  <a href="/kids">Kids</a>
  <a href="/cart">Cart</a>
</nav>
  <h1>Welcome to men page</h1>
</body>
</html>

        `);
  } else if (req.url === "/women") {
    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <!-- You can link CSS or add meta tags here -->
</head>
<body>
<nav>
  <a href="/">Home</a>
  <a href="/men">Men</a>
  <a href="/women">Women</a>
  <a href="/kids">Kids</a>
  <a href="/cart">Cart</a>
</nav>
  <h1>Welcome to women page</h1>
</body>
</html>

        `);
  } else {
    res.write(`
            <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <!-- You can link CSS or add meta tags here -->
    </head>
    <body>
     <a href="/">back</a>
      <h1>404 not found</h1>
    </body>
    </html>`);
  }
});
const port = 3000;

server.listen(port, function () {
  console.log(`you server is running on : http://localhost:${port}`);
});
