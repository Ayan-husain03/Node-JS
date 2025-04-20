const fs = require("fs");


function requestHandler(req, res) {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write(`
            <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Simple Form</title>
</head>
<body>
  <h2>User Form</h2>
  <form action="/submit-details" method="post">
    <label for="username">Username:</label><br>
    <input type="text" id="username" name="username" required><br><br>

    <label for="gender">Gender:</label><br>
    <select id="gender" name="gender" required>
      <option value="">Select</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select><br><br>

    <button type="submit">Submit</button>
  </form>
</body>
</html>

            `);
    res.end();
  } else if (req.url === "/submit-details" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(parsedBody);
      const bodyObj = Object.fromEntries(params);
      console.log(bodyObj);
        console.log(parsedBody);
        fs.writeFile(
            "user-details.txt",
            JSON.stringify(bodyObj),
            (err) => {
              if (err) throw err;
              console.log("File saved!");
            }
          );
    });

    res.statusCode = 300;
    res.setHeader("Location", "/");
  } else if (req.url === "/thank-you") {
    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
    <title>Simple Form</title>
</head>
<body>
    <h2>Thank you for submitting your details!</h2>
    <p>Your details have been saved.</p>
    <a href="/">Go back to the form</a>
</body>
</html>
        `);
    res.end();
  } else {
    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Simple Form</title>
</head>
<body>
  <h2>404 Page not found</h2>
</body>
</html>

        `);
  }
}


module.exports = requestHandler;