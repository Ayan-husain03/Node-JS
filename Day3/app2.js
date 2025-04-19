const http = require("http");
const fs = require('fs')

const server = http.createServer(function (req, res) {
  res.setHeader("content-type", "text/html");
  if (req.url === "/") {
    res.write(`
           <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Website</title>
</head>
<body>
  <h1>Enter Your details</h1>
  <form action="/submit-details" method="POST">
  <div>
  <label>Enter name : </label> 
  <input type="text" placeholder="enter your name" name="username" />
  </div>
  <div>
  <label>Select Gender : </label> 
  <input type="radio" name="gender" value="male" />
  <label>male : </label> 
  <input type="radio" name="gender" value="female" />
  <label>female : </label>
  </div>
  <button>submit</button>
  </form>
</body>
</html>

            `);
    res.end();
  } else if (req.url.toLocaleLowerCase() === "/submit-details" && req.method === "POST") {
      fs.writeFileSync("user.txt","details added successfully go to app2.js", )
      res.statusCode = 302;
      res.setHeader('Location', '/')
  }
  else {
    res.write(`
          <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Website</title>
</head>
<body>
  <h1>404 Page Not Found!</h1>
</body>
</html>
        `);
  }
});

const PORT = 3000;
server.listen(PORT, function () {
  console.log(`your server is running on http://localhost:${PORT}`);
});
