const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class FoodCategory extends Model {}

FoodCategory.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'foodCategory',
  }
);

module.exports = FoodCategory;