const http = require('http')

const server = http.createServer(function (req, req) {
    console.log(req)
})
const PORT = 3000;

server.listen(PORT, function () {
    console.log(`Server running on address http://localhost:${PORT}`)
})