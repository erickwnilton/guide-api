import { Customers } from "../models/customers.js";

export function getCustomers(req, res) {
  return Customers.findAll().then((result) => {
    res.status(200).json(result)
  })
}

export async function addCustomer(req, res) {
  try {
    await Customers.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      function: req.body.function,
      email: req.body.email
    })

      .then((result) => { res.status(201).json(result) })
  } catch (error) {
    return res.status(500).json({
      message: "error when creating customer"
    })
  }
}

export function putCustomer() {

}

export function deleteCustomer() {

}
