import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Customers = sequelize.define('Customers', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  function: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {})

console.log(Customers === sequelize.models.Customers);