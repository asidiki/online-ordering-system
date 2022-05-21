const router = require('express').Router();

<<<<<<< HEAD
=======


>>>>>>> f96c05612f66ad3ccec84517f69401167a87a5b1
router.get('/', (req, res) => {
    console.log(req.session);
    res.render('homepage');
});

router.get('/login', (req, res) => {
<<<<<<< HEAD
    // if (req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }
=======
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
>>>>>>> f96c05612f66ad3ccec84517f69401167a87a5b1
    res.render('login');
});

module.exports = router;