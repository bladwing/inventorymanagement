import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Info = db.define('info', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  code: {
    type: DataTypes.DOUBLE,
  },
  account: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  telephone: {
    type: DataTypes.DOUBLE,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  }
});

export default Info;
