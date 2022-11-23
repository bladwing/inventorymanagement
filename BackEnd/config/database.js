import { Sequelize } from "sequelize";

const db = new Sequelize("invstock", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

db
  .authenticate()
  .then(() => {
    console.log('You are connected to mySQL database.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default db;
