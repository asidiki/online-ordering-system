const { Food } = require('../models');

const foodData = [
  {
    food_name: 'Fies',
    price: 14.99,
  },
  {
    food_name: 'Burger',
    price: 24.99,
  },
  {
    food_name: 'Pineapple',
    price: 34.99,
  },
  {
    food_name: 'Bottled Water',
    price: 4.99,
  },
  {
    food_name: 'Coke',
    price: 5.99,
  },
  {
    food_name: 'Pineapple Juice',
    price: 10.99,
  },
  {
    food_name: 'Ice Cream',
    price: 18.99,
  },
  {
    food_name: 'Bubble Tea',
    price: 20.99,
  },
];

const seedFoods = () => Food.bulkCreate(foodData);

module.exports = seedFoods;
