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
        console.log(items)
        const apps = items.filter(item => item.food_category === "Appetizer")
        console.log(apps)
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