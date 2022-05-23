const { Food } = require('../models');

const foodData = [
  {
    food_name: 'Cheesy Breadsticks',
    price: 5.99,
    food_category: 'Appetizer'
    ,
    image:'https://www.countrysidecravings.com/wp-content/uploads/2020/05/cheese-breadsticks-picture.jpg'
  },
  {
    food_name: 'Bone-In Chicken Wings',
    price: 11.99,
    food_category: 'Appetizer'
    ,
    image:'https://tastesbetterfromscratch.com/wp-content/uploads/2014/09/Baked-Chicken-Wings-3.jpg'
  },
  {
    food_name: 'Boneless Chicken Wings',
    price: 9.99,
    food_category: 'Appetizer'
    ,
    image:'https://www.halfbakedharvest.com/wp-content/uploads/2019/09/Baked-Boneless-Honey-BBQ-Chicken-Wings-with-Spicy-Ranch-1-1.jpg'
  },
  {
    food_name: 'Garden Salad',
    price: 7.99,
    food_category: 'Salad'
    ,
    image:'https://www.lecremedelacrumb.com/wp-content/uploads/2022/01/olive-garden-salad-7sm-6.jpg'
  },
  {
    food_name: 'Caesar Salad',
    price: 7.99,
    food_category: 'Salad'
    ,
    image:'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg'
  },
  {
    food_name: 'Antipasto Salad',
    price: 9.99,
    food_category: 'Salad'
    ,
    image:'https://midwestfoodieblog.com/wp-content/uploads/2020/03/FINAL-antipasto-9.jpg'
  },
  {
    food_name: 'Greek Salad',
    price: 9.99,
    food_category: 'Salad'
    ,
    image:'https://www.themediterraneandish.com/wp-content/uploads/2020/02/Greek-salad-recipe-3.jpg'
  },
  {
    food_name: 'Cheese',
    price: 11.99,
    food_category: 'Pizza'
    ,
    image:'https://static.spotapps.co/spots/6f/6f9d74e5b548139c87bf6c19491323/full'
  },
  {
    food_name: 'Pepperoni',
    price: 13.99,
    food_category: 'Pizza'
    ,
    image:'https://static.spotapps.co/spots/79/17c1c037fc49cb9b57a5014bc38066/full'
  },
  {
    food_name: 'Meat Lovers',
    price: 15.99,
    food_category: 'Pizza'
    ,
    image:'https://static.spotapps.co/spots/35/2cc4c26e364dd69b154967f70f7768/full'
  },
  {
    food_name: 'Veggie',
    price: 15.99,
    food_category: 'Pizza'
    ,
    image:'https://static.spotapps.co/spots/29/3f0a7721c14dafae210bc255923dbd/full'
  },
  {
    food_name: 'Supreme',
    price: 15.99,
    food_category: 'Pizza'
    ,
    image:'https://static.spotapps.co/spots/a0/4c02bca77b47c991cadb8ad0ad9127/full'
  },
  {
    food_name: 'Chocolate Lava Cake',
    price: 5.99,
    food_category: 'Dessert'
    ,
    image:'https://www.acouplecooks.com/wp-content/uploads/2022/02/Lava-Cake-005s.jpg'
  },
  {
    food_name: 'Cinnamon Sugar Breadsticks',
    price: 5.99,
    food_category: 'Dessert'
    ,
    image:'https://res.cloudinary.com/hksqkdlah/image/upload/40273_sfs-5-easy-breadsticks-cinnamon-sugar-1.jpg'
  },
  {
    food_name: 'Blue Lemonade',
    price: 2.99,
    food_category: 'Drink'
    ,
    image:'https://mixthatdrink.com/wp-content/uploads/2020/02/sex-in-the-driveway-drink-3.jpg'
  },
  {
    food_name: 'Strawberry Lemonade',
    price: 2.99,
    food_category: 'Drink'
    ,
    image:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F06%2F09%2Farticle-red-drink.jpg'
  },
  {
    food_name: 'Margarita Mocktail',
    price: 2.99,
    food_category: 'Drink'
    ,
    image:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F07%2F24%2F8359719.jpg'
  },
  {
    food_name: 'Mint Green Tea',
    price: 2.99,
    food_category: 'Drink'
    ,
    image:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2018%2F07%2F27113154%2F3756563.jpg'
  }
];

const seedFoods = () => Food.bulkCreate(foodData);

module.exports = seedFoods;