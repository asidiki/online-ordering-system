const { User } = require('../models');

const userData = [
  {
    first_name: 'Ali',
    last_name: 'Maqsood',
    email: 'am@fakemail.com',
    username: 'almaq',
    address: 'Mars',
    password: '123456789'
  },
  {
    first_name: 'Garth',
    last_name: 'Hammonds',
    email: 'gh@fakemail.com',
    username: 'garham',
    address: 'Jupyter',
    password: '123456789'
  },
  {
    first_name: 'Bryant',
    last_name: 'Omoregie',
    email: 'bo@fakemail.com',
    username: 'bryomo',
    address: 'Moon',
    password: '123456789'
  },
  {
    first_name: 'Mason',
    last_name: 'Boomgaard',
    email: 'mb@fakemail.com',
    username: 'masboo',
    address: 'Mercury',
    password: '123456789'
  },
  {
    first_name: 'Moe',
    last_name: 'Yassine',
    email: 'my@fakemail.com',
    username: 'moyas',
    address: 'Venus',
    password: '123456789'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;