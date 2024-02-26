import { Customers } from "../models/customers.js";

export async function getCustomers(req, res) {
  const result = await Customers.findAll();
  res.status(200).json(result);
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

export async function putCustomer(req, res) {
  try {
    const customer = await Customers.findByPk(req.params.id);

    if (customer) {
      await Customers.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        function: req.body.function,
        email: req.body.email
      }, {
        where: {
          id: req.params.id
        }
      })

      return Customers.findByPk(req.params.id)
        .then((result) => { res.status(200).json(result) })
    }

    else {
      res.status(404).json({
        message: "customer not found"
      })
    }

  } catch (error) {
    return res.status(400).json({
      message: "error updating client"
    })
  }
}

export async function deleteCustomer(req, res) {
  try {
    const customer = await Customers.findByPk(req.params.id);

    if (customer) {
      await Customers.destroy({
        where: {
          id: req.params.id
        }
      })

      return Customers.findAll((result) => {
        res.status(200).json(result)
      })
    }

    else {
      return res.status(404).json({
        message: "customer not found"
      })
    }

  } catch (error) {
    return res.status(500).json({
      message: "error when deleted product"
    })
  }
}
