const router = require('express').Router();
const { User } = require('../../models');
const session = require('express-session');

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

router.post('/', (req, res) => {
    // expects {first_name: 'Lernantino', last_name: 'Smith', email: 'lernantino@gmail.com', address: 'California'}
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password,
        username: req.body.username
    }) .then(dbUserData => {
            req.session.save(() => {
                console.log(dbUserData);
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;
            
                res.json(dbUserData);
            });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});






// POST /api/users
router.post('/login', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }

        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    });
});




router.get('/:email', (req, res) => {
    User.findOne({
        where: {
            email: req.params.email
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

router.post('/logout', function (req, res){
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});


module.exports = [
    router
]