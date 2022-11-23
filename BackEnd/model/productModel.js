import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define('products',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sku:{
        type: DataTypes.STRING
    },
    name:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    },
    buyfromcompany:{
        type: DataTypes.STRING
    },
    approxprice:{
        type: DataTypes.DOUBLE
    },
    pieces: {
        type: DataTypes.DOUBLE
    },
	length: {
        type: DataTypes.DOUBLE
    },
    document: {
        type: DataTypes.BOOLEAN
    },
    sold: {
        type: DataTypes.BOOLEAN
    },
    soldtocompany:{
        type: DataTypes.STRING
    },
    soldprice:{
        type: DataTypes.DOUBLE
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }

},{
   
});

export default Product;