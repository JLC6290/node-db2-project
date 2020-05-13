
const express = require("express");
const carRouter = require("../routers/car-router");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ message: "server running, use /api/cars for requests" });
})

server.use("/api/cars", carRouter);

module.exports = server;