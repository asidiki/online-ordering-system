const { Food } = require('../models');

const foodData = [
  {
    food_name: 'Cheesy Breadsticks',
    price: 5.99,
    food_category: 'Appetizer'
    ,
    // image:'https://drive.google.com/file/d/1OdmUotlRmpvZ9OEwpk5RSB-HXz0Tw7GS/view'
  },
  {
    food_name: 'Bone-In Chicken Wings',
    price: 11.99,
    food_category: 'Appetizer'
    ,
    // image:'https://drive.google.com/file/d/1FlcXPEcB40k-C0o9i8fi9kNyuCCZP3ix/view'
  },
  {
    food_name: 'Boneless Chicken Wings',
    price: 9.99,
    food_category: 'Appetizer'
    ,
    // image:'https://drive.google.com/file/d/1qFdVWguFrKR4AX80iamLm-tevcanMbmo/view'
  },
  {
    food_name: 'Garden Salad',
    price: 7.99,
    food_category: 'Salad'
    ,
    // image:'https://drive.google.com/file/d/1VmZQ3Z8HhT5g16FMqYYDsDCCzqBlQxe1/view'
  },
  {
    food_name: 'Caesar Salad',
    price: 7.99,
    food_category: 'Salad'
    ,
    // image:'https://drive.google.com/file/d/1s4GY3sLJPNd_rZXp4MSELwnIoEWAii4c/view'
  },
  {
    food_name: 'Antipasto Salad',
    price: 9.99,
    food_category: 'Salad'
    ,
    // image:'https://drive.google.com/file/d/18tfubtpXVEDEsc_SZ3r2jK4_Icf1_2FB/view'
  },
  {
    food_name: 'Greek Salad',
    price: 9.99,
    food_category: 'Salad'
    ,
    // image:'https://drive.google.com/file/d/1HliePs8C2JKAuvsgAQHdo56JOsnMntqa/view'
  },
  {
    food_name: 'Cheese',
    price: 11.99,
    food_category: 'Pizza'
    ,
    // image:'https://drive.google.com/file/d/1I8b2U8uR6MwhVGvEXLYykaWm8LbZYU0-/view'
  },
  {
    food_name: 'Pepperoni',
    price: 13.99,
    food_category: 'Pizza'
    ,
    // image:'https://drive.google.com/file/d/1z4KLQbXO4GRp5M6OBHg6-tNcpsoI3JL0/view'
  },
  {
    food_name: 'Meat Lovers',
    price: 15.99,
    food_category: 'Pizza'
    ,
    // image:'https://drive.google.com/file/d/1Yp9jkohZDqAJNF2tNaYh1vHNsgR8DqF1/view'
  },
  {
    food_name: 'Veggie',
    price: 15.99,
    food_category: 'Pizza'
    ,
    // image:'https://drive.google.com/file/d/1WGROBm1dPkMyCaeP5-H1Gdb9AFTqjX-o/view'
  },
  {
    food_name: 'Supreme',
    price: 15.99,
    food_category: 'Pizza'
    ,
    // image:'https://drive.google.com/file/d/1xsgt73cCvkVMZrJZ_mdqmA35j0W7WUZr/view'
  },
  {
    food_name: 'Chocolate Lava Cake',
    price: 5.99,
    food_category: 'Dessert'
    ,
    // image:'https://drive.google.com/file/d/1rt8Xi6ztsV8t-I8S3eIboCNDZd3hsj7l/view'
  },
  {
    food_name: 'Cinnamon Sugar Breadsticks',
    price: 5.99,
    food_category: 'Dessert'
    ,
    // image:'https://drive.google.com/file/d/1nHQh2ynhxx71HpbP9TIiIXHjaYSt6Fby/view'
  },
  {
    food_name: 'Coke',
    price: 2.99,
    food_category: 'Drink'
    ,
    // image:'https://drive.google.com/file/d/1ww6Yl0ljPG40lzw1_Qn2yvN2ljr5gETp/view'
  },
  {
    food_name: 'Sprite',
    price: 2.99,
    food_category: 'Drink'
    ,
    // image:'https://drive.google.com/file/d/1tGjmuXDns6HfFD6WhLqktEwhDOeGAFcC/view'
  },
  {
    food_name: 'Orange Fanta',
    price: 2.99,
    food_category: 'Drink'
    ,
    // image:'https://drive.google.com/file/d/1weEBpMm6PV120EMuIQaahiEGGZvYKd7i/view'
  },
  {
    food_name: 'Dr. Pepper',
    price: 2.99,
    food_category: 'Drink'
    ,
    // image:'https://drive.google.com/file/d/14jXfo40BPlZDozrAgWG9RlQM2GK_tCuC/view'
  }
];

const seedFoods = () => Food.bulkCreate(foodData);

module.exports = seedFoods;