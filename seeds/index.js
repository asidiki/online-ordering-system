const seedUsers = require('./user-seeds');
const seedFoods = require('./food-seeds');
const seedDrivers = require('./driver-seeds');
const seedOrders = require('./order-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedFoods();
  console.log('\n----- FOODS SEEDED -----\n');

  await seedDrivers();
  console.log('\n----- DRIVERS SEEDED -----\n');

  await seedOrders();
  console.log('\n----- ORDERS SEEDED -----\n');

  process.exit(0);
};

seedAll();
