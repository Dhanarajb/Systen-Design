const PROTO_PATH = "./customers.proto";

const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const customerProto = grpc.loadPackageDefinition(packageDefinition).customers;

const client = new customerProto.CustomerService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);
module.exports = client;
