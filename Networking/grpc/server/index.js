const grpc = require("@grpc-/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./customers.proto";

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const customerProto = grpc.loadPackageDefinition(packageDefinition).customers;
const serve = new grpc.Server();

const customers = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    phone: "1234567890",
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@gmail.com",
    phone: "1234567890",
  },
];
server.addService(customerProto.CustomerService.service, {
  getAll: (call, callback) => {
    callback(null, { customers });
  },
  get: (call, callback) => {
    const customer = customers.find((c) => c.id === call.request.id);
    if (customer) {
      callback(null, customer);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Customer not found",
      });
    }
  },
  insert: (call, callback) => {
    const customer = call.request;
    customers.id = Math.random();
    customers.push(customer);
    callback(null, customer);
  },
  update: (call, callback) => {
    let existingCustomer = customers.find((c) => c.id === call.request.id);
    if (existingCustomer) {
      existingCustomer.name = call.request.name;
      existingCustomer.email = call.request.email;
      existingCustomer.phone = call.request.phone;
      callback(null, existingCustomer);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Customer not found",
      });
    }
  },
  remove: (call, callback) => {
    let existingCustomer = customers.find((c) => c.id === call.request.id);

    if (existingCustomer) {
      customers.splice(customers.indexOf(existingCustomer), 1);
      callback(null, existingCustomer);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Customer not found",
      });
    }
  },
});

server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.log(err);
    } else {
      server.start();
      console.log("Server running at http://0.0.0.0:50051");
    }
  }
);
