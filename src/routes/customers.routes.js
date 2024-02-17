import { Router } from "express";

export const customers = Router();

customers.get("/customers");
customers.post("/customers");
customers.put("/customers");
customers.delete("/customers");

