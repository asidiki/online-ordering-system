// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Order extends Model {}

// set up fields and rules for Order model
Order.init(
  {
    // define columns
    // id is a needed column (the package by default need a key so we add it)
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // This order_id is not primary key anymore!
    // We need to enter it every time we got an order in table

    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    food_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'food',
          key: 'id'
      }
    },
    driver_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'driver',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'order',
  }
);

module.exports = Order;