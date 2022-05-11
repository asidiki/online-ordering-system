
const { Order } = require('../models');

const orderData = [
  {
    order_id: 1,
    user_id: 1,
    food_id: 1,
    driver_id: 1,
  },
  {
    order_id: 2,
    user_id: 2,
    food_id: 2,
    driver_id: 2,
  },
  {
    order_id: 3,
    user_id: 3,
    food_id: 3,
    driver_id: 3,
  },
  {
    order_id: 4,
    user_id: 4,
    food_id: 6,
    driver_id: 4,
  },
  {
    order_id: 5,
    user_id: 5,
    food_id: 8,
    driver_id: 5,
  },
];

const seedOrders = () => Order.bulkCreate(orderData);

module.exports = seedOrders;