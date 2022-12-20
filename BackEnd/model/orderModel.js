import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Orders = db.define('orders', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ordcompanyname: {
    type: DataTypes.STRING,
  },
  ordproductname: {
    type: DataTypes.STRING,
  },
  ordproductpieces: {
    type: DataTypes.DOUBLE,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  }
});

export default Orders;
