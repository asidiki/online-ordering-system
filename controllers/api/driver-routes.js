const router = require('express').Router();
const { Driver } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    Driver.findAll()
    .then(dbDriverData => res.json(dbDriverData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Driver.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbDriverData => {
        if (!dbDriverData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbDriverData);
    })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

module.exports = router; 