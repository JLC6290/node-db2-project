const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();

router.get('/', (req, res) => {
    return db('cars')
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

// router.post('/', (req, res) => {
//     console.log(req.body);
//     db('cars')
//     .insert(req.body)
//     .then(response => {
//         res.status(200).json(response);
//     })
//     .catch(error => {
//         res.status(500).json(error);
//     })
// })

router.post("/", (req, res) => {
    const post = req.body;
    const { make, model, vin, mileage } = post;
  
    if (!make || !model || !vin || !mileage) {
      res.status(400).json({ error: "Fill in required fields." });
    } else {
      return db("cars")
        .insert(post)
        .then(id => {
          res.status(201).json(id);
        })
        .catch(error => {
          console.log(error);
          res
            .status(500)
            .json({ error: "Something went wrong while adding the entry!" });
        });
    }
  });
  

module.exports = router;