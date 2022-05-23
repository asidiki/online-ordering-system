const { Food, FoodCategory } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
    Food.findAll({
        attributes: [
            'id',
            'food_name',
            'price',
            'food_category',
            'image'
        ]
    })
    .then(dbFoodData => {
        
        const items = dbFoodData.map(food => food.get({ plain: true}))
        
        res.render('homepage', {items});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });  
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;