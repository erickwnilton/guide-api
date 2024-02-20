import { Customers } from "../models/customers.js";

export function getCustomers(req, res) {
  return Customers.findAll().then((result) => {
    res.status(200).json(result)
  })
}

export function addCustomer(req, res) {

}

export function putCustomer() {

}

export function deleteCustomer() {

}
