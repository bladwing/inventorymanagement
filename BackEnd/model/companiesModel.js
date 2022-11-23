import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Compnaies = db.define('companies',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    company:{
        type: DataTypes.STRING
    },
    companycode:{
        type: DataTypes.DOUBLE
    },
    telephone:{
        type: DataTypes.DOUBLE
    },
    address:{
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }

},{
   
});

export default Compnaies;