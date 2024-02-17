import { config } from "dotenv";

config();

export const server = {
  port: process.env.PORT
}

export const database = {
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST
}