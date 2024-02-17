import { Router } from "express";
import { customers } from "./customers.routes.js";

export const routes = Router();

routes.use(customers);