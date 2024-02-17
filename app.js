import cors from "cors";
import express from "express";
import { database } from "./config.js";
import { sequelize } from "./src/database/database.js";

const app = express();

app.use(express.json());
app.use(cors());

async function connectDatabase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`Database ${database.database} is connected`)
  } catch (error) {
    console.log(`Database is not connected ${error}`);
  }
}

async function startBackend() {
  await connectDatabase();
}

export {
  app,
  startBackend
}