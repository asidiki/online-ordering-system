// import models
const User = require('./User');
const Food = require('./Food');
const Order = require('./Order');
const Driver = require('./Driver');
const FoodCategory = require('./food-category')

Order.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Order, {
  foreignKey: 'user_id'
});


Order.belongsTo(Food, {
  foreignKey: 'food_id'
});

Food.hasMany(Order, {
  foreignKey: 'food_id'
});


Order.belongsTo(Driver, {
  foreignKey: 'driver_id'
});

Driver.hasMany(Order, {
  foreignKey: 'driver_id'
});

Food.belongsTo(FoodCategory, {
  foreignKey: 'food_id'
})

FoodCategory.hasMany(Food, {
  foreignKey: 'foodCategory_id'
})

User.belongsToMany(Food, {
  through: Order,
  foreignKey: 'user_id'
});

Food.belongsToMany(User, {
  through: Order,
  foreignKey: 'food_id'
});

User.belongsToMany(Driver, {
    through: Order,
    foreignKey: 'user_id'
  });
  
Driver.belongsToMany(User, {
through: Order,
foreignKey: 'driver_id'
});

Food.belongsToMany(Driver, {
  through: Order,
  foreignKey: 'food_id'
});

Driver.belongsToMany(Food, {
through: Order,
foreignKey: 'driver_id'
});

module.exports = {
  User,
  Food,
  Order,
  Driver,
  FoodCategory
};
