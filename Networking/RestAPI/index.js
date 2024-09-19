/**
 * Starts a simple Express.js server that listens on port 3000 and responds with "Hello, World!" to all requests.
 *
 * This code sets up an Express.js application, defines a route handler for the root URL ("/"), and starts the server to listen on port 3000.
 * The route handler logs the incoming request and response objects to the console, and sends the "Hello, World!" message as the response.
 */
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.all("/", (req, resp) => {
  console.log("Just got a request!", req);
  console.log("Just got a response!", resp);
  resp.send("Hello, World!");
});

const todos = [
  {
    id: "1",
    title: "task",
    complted: true,
  },
  {
    id: "2",
    title: "task2",
    complted: false,
  },
];
//READ
app.get("/todos", (req, resp) => {
  resp.json(todos);
});

//CREATE
app.post("/todos", (req, resp) => {
  const newTodo = req.body;
  todos.push(newTodo);
  resp.status(201).json({
    message: "new todo added",
  });
});
//UPDATE

app.put("/todos/:id", (req, resp) => {
  const newTodoData = req.body;
  const todoParamID = req.params.id;
  const todoIndex = todos.findIndex((todo) => todo.id === todoParamID);
  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: todoParamID,
      ...newTodoData,
    };
    resp.json({
      message: "Todo Updated Successfully",
    });
  } else {
    resp.status(404).json({
      message: "Todo Not Found",
    });
  }
});
//DELETE
app.delete("/todos/:id", (req, resp) => {
  const todoParamID = req.params.id;
  const todoIndex = todos.findIndex((todo) => todo.id === todoParamID);
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
  }
  resp.json({
    message: "Todo Deleted Successfully",
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
