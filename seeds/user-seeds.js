const { User } = require('../models');

const userData = [
  {
    first_name: 'Ali',
    last_name: 'Maqsood',
    email: 'am@fakemail.com',
    address: 'Mars',
  },
  {
    first_name: 'Garth',
    last_name: 'Hammonds',
    email: 'gh@fakemail.com',
    address: 'Jupyter',
  },
  {
    first_name: 'Bryant',
    last_name: 'Omoregie',
    email: 'bo@fakemail.com',
    address: 'Moon',
  },
  {
    first_name: 'Mason',
    last_name: 'Boomgaard',
    email: 'mb@fakemail.com',
    address: 'Mercury',
  },
  {
    first_name: 'Moe',
    last_name: 'Yassine',
    email: 'my@fakemail.com',
    address: 'Venus',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;