const router = require('express').Router();
const { Food } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    Food.findAll()
    .then(dbFoodData => res.json(dbFoodData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Food.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbFoodData => {
        if (!dbFoodData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbFoodData);
    })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

module.exports = router;