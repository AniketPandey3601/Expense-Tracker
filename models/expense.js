const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('expense', 'root', 'An12Pa99@', {
  dialect: 'mysql',
  host: 'localhost',
});

const Expense = sequelize.define('Expense', {
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Expense;