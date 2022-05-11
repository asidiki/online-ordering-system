const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Driver extends Model {}

Driver.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement: true,
    },
    driver_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'driver',
  }
);

module.exports = Driver;