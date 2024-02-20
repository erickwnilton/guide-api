import request from "supertest";
import { app } from "../app.js";

describe("testing client controllers on routes", () => {

  it("show all customers", async () => {
    const res = await request(app).get("/customers");

    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  })

  it("create new customer", async () => {
    const data = {
      firstName: "",
      lastName: "",
      function: "",
      email: ""
    }

    const res = await request(app).post("/customers")
      .send(data);

    expect(res.status).toBe(201);
    expect(res.body).toBeInstanceOf(Object);
  })

  it("update existing customer", async () => {
    const data = {
      firstName: "",
      lastName: "",
      function: "",
      email: ""
    }

    const res = await request(app).put("/customers/:id")
      .send(data)

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Object)
  })

  it("delete existing customer", async () => {
    const res = await request(app).delete("/customers/:id")

    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
  })
})