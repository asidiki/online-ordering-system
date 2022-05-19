const { Food } = require('../models');

const foodData = [
  {
    food_name: 'Cheesy Breadsticks',
    price: 5.99,
    category_id: 2
  },
  {
    food_name: 'Bone-In Chicken Wings',
    price: 11.99,
    category_id: 2
  },
  {
    food_name: 'Boneless Chicken Wings',
    price: 9.99,
    category_id: 2
  },
  {
    food_name: 'Garden Salad',
    price: 7.99,
    category_id: 1
  },
  {
    food_name: 'Caesar Salad',
    price: 7.99,
    category_id: 1
  },
  {
    food_name: 'Antipasto Salad',
    price: 9.99,
    category_id: 1
  },
  {
    food_name: 'Greek Salad',
    price: 9.99,
    category_id: 1
  },
  {
    food_name: 'Cheese',
    price: 11.99,
    category_id: 3
  },
  {
    food_name: 'Pepperoni',
    price: 13.99,
    category_id: 3
  },
  {
    food_name: 'Meat Lovers',
    price: 15.99,
    category_id: 3
  },
  {
    food_name: 'Veggie',
    price: 15.99,
    category_id: 3
  },
  {
    food_name: 'Supreme',
    price: 15.99,
    category_id: 3
  },
  {
    food_name: 'Chocolate Lava Cake',
    price: 5.99,
    category_id: 4
  },
  {
    food_name: 'Cinnamon Sugar Breadsticks',
    price: 5.99,
    category_id: 4
  },
  {
    food_name: 'Coke',
    price: 2.99,
    category_id: 5
  },
  {
    food_name: 'Sprite',
    price: 2.99,
    category_id: 5
  },
  {
    food_name: 'Orange Fanta',
    price: 2.99,
    category_id: 5
  },
  {
    food_name: 'Dr. Pepper',
    price: 2.99,
    category_id: 5
  }
];

const seedFoods = () => Food.bulkCreate(foodData);

module.exports = seedFoods;
