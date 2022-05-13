const router = require('express').Router();

const userRoutes = require('./user-routes');
const foodRoutes = require('./food-routes');
// const driverRoutes = require('./driver-routes');
// const orderRoutes = require('./order-routes');

router.use('/users', userRoutes);
router.use('/food', foodRoutes);
// router.use('/drivers', driverRoutes);
// router.use('/orders', orderRoutes);


module.exports = router;