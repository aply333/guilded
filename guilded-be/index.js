const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');

const server = express();
const port = 5000

function logger(req, res, next) {
    console.log(`${Date.now()}: ${req.method} at ${req.url}`)
    next()
}

server.use("/users", userRoutes)

server.use(logger)
server.use(bodyParser.json())
server.get("/", (req, res) => {
    res.status(200).json({location: "root"})
})

server.listen(port , () => {
    console.log(`SERVER is on port: ${port}`)
})