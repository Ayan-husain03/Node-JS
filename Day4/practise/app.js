const http = require("http");
const handleCalculation = require("./calculator.js");
const server = http.createServer(handleCalculation)

const port = 3000;
const host = "localhost";

server.listen(port, host, () => { 
    console.log(`Server running at http://${host}:${port}`);
});