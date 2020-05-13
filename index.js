const express = require('express');
const server = express();

const db = require('./data/dbConfig');

server.use(express.json());

server.get('/cars', (req, res) => {
    return db('cars')
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

server.post('/cars', (req, res) => {
    return db('cars')
    .insert(req.body)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`\n== API running on port ${PORT} ==\n`);
})