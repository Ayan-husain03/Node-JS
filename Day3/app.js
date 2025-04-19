const http = require("http");

const server = http.createServer(function (req, res) {
  print(req.url, req.headers, req.method);
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/") {
    res.write(`
            <html>
            <head></head>
            <body>
            <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            </nav>
            <h1>welcome to home page</h1>
            </body>
            </html>
            `);
    return res.end();
  } else {
    res.write(`
        <html>
            <head></head>
            <body>
             <a href="/">back</a>
            <h1 style={text-align : center}>404 Page Not Found</h1>
            </body>
            </html>

        `);
    return res.end();
  }
});
const PORT = 3000;
server.listen(PORT, function () {
  print(`server is running is on http://localhost:${PORT}`);
});

function print(...elem) {
  return console.log(elem);
}
