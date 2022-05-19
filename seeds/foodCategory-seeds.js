const { Food } = require('../models');

const foodData = [
  {
    category_name: 'Appetizers'
  },
  {
      category_name: 'Salads'
  },
  {
      category_name: 'NY Style Pizzas'
  },
  {
      category_name: 'Dessert'
  },
  {
      category_name: 'Beverages'
  }
];

const seedFoods = () => Food.bulkCreate(foodData);

module.exports = seedFoods;
