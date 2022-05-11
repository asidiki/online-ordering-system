const { Driver } = require('../models');

const driverData = [
  {
    driver_name: 'Chen',
  },
  {
    driver_name: 'Ansab',
  },
  {
    driver_name: 'Cameron',
  },
  {
    driver_name: 'Mitchell',
  },
  {
    driver_name: 'Aireeal',
  },
];

const seedDrivers = () => Driver.bulkCreate(driverData);

module.exports = seedDrivers;