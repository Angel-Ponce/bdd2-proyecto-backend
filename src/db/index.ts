import { DataSource } from "typeorm";

const db = new DataSource({
  type: "mssql",
  host: process.env.DB_HOST || "",
  port: Number(process.env.DB_PORT || 1433),
  username: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "",
  // logging: true,
});

export { db };
