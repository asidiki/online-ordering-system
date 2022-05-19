const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const FoodCategory = require('./food-category.js');

class Food extends Model {}

Food.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    food_name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: 
      { model: FoodCategory,
      key: 'id'},
      },
    image: {
      type:DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'food',
  }
);

module.exports = Food;