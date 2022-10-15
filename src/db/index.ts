import { Sequelize } from "sequelize-typescript";

const db = new Sequelize({
  database: process.env.DB_DATABASE,
  dialect: "mssql",
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 1433),
});

export { db };
