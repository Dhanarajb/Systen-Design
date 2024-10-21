const express = require("express");
const bodyParser = require("body-parser");
const client = require("./client");

const cors = require("cors");
const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

//TODO to expose rest call
app.get("/", (req, res) => {
  client.getAll({}, (err, customers) => {
    if (err) throw err;
    res.send(customers);
  });
});
app.post("/create", (req, res) => {
  let newCustomer = {
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  };
  client.insert(newCustomer, (err, customer) => {
    if (err) throw err;
    res.send(customer);
  });
});
app.post("/update", (req, res) => {
  const updateCustomer = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  };
  client.update(updateCustomer, (err, customer) => {
    if (err) throw err;
    res.send(customer);
  });
});
app.post("/remove", (req, res) => {
  const deleteCustomer = {
    id: req.body.id,
  };
  client.remove(deleteCustomer, (err, customer) => {
    if (err) throw err;
    res.send(customer);
  });
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
