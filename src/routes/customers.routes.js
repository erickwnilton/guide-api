import { Router } from "express";
import { addCustomer, deleteCustomer, getCustomers, putCustomer } from "../controllers/customers.js";

export const customers = Router();

customers.get("/customers", getCustomers);
customers.post("/customers", addCustomer);
customers.put("/customers/:id", putCustomer);
customers.delete("/customers/:id", deleteCustomer);