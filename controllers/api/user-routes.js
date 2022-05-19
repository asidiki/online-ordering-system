const router = require('express').Router();
const { User } = require('../../models');
const session = require('express-session');
const bcrypt = require('bcrypt');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;


passport.serializeUser(function (user, done){
    done(null, user.id)
});

passport.deserializeUser(function (id, done){
    User.findByPk(id, function(err, user){
        done(err, user);
    });
});


passport.use(new localStrategy(function (email, password, done){
    User.findOne({ username: email }, function(err, user){
        if (err) return done(err);
        if (!user) {
            return done(null, false, { message: 'Incorrect Username' });
        }
        bcrypt.compare(password, user.password, function(err, res){
            if (err) return done(err);
            if (res === false) return done(null, false, { message: 'Incorrect password' });

            return done(null,user);
        });
    })
}))


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
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(req.body.password, salt, function (err, hash){
            if (err) return next(err);
            User.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                address: req.body.address,
                password: hash,
                username: req.body.username
            }) .then(dbUserData => {
                    req.session.save(() => {
                        console.log(dbUserData);
                        req.session.user_id = dbUserData.id;
                        req.session.username = dbUserData.username;
                        req.session.loggedIn = true;
                    
                        res.json(dbUserData);
                    });
            }) .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
        })
        
    }); 
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

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