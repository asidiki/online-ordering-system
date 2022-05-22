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
        console.log(dbFoodData)
        const salads = dbFoodData.map(food => food.get({ plain: true})).filter(food => food.food_category = 'Salad')
        const appetizers = dbFoodData.map(food => food.get({ plain: true})).filter(food => food.food_category = 'Appetizer')
        const pizzas = dbFoodData.map(food => food.get({ plain: true})).filter(food => food.food_category = 'Pizza')
        const desserts = dbFoodData.map(food => food.get({ plain: true})).filter(food => food.food_category = 'Dessert')
        const beverages = dbFoodData.map(food => food.get({ plain: true})).filter(food => food.food_category = 'Drink')
        res.render('homepage', {salads, appetizers, pizzas, desserts, beverages});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });  
});

router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }
    res.render('login');
});

module.exports = router;