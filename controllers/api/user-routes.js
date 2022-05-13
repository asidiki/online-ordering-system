const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    User.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});

// POST /api/users
router.post('/', (req, res) => {
    // expects {first_name: 'Lernantino', last_name: 'Smith', email: 'lernantino@gmail.com', address: 'California'}
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        address: req.body.address
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
});



module.exports = router;