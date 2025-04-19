const http = require('http')

const server = http.createServer(function (req, res) {
    print("This is Url : ",req.url)
    print("This is method : ",req.method)
    print("This is req : ",req.headers)
})
const PORT = 3000;

server.listen(PORT, function () {
    console.log(`Server running on address http://localhost:${PORT}`)
})

function print(...elem) {
    return console.log(elem)
}