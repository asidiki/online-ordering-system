const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

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
    food_category : {
      type: DataTypes.STRING,
      allowNull: false,
      default: null
    },
    image: {
      type:DataTypes.STRING,
      allowNull: true,
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