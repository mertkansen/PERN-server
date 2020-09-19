import express from "express";
import Cors from "cors";
import {
  createTodo,
  getAll,
  getTodoWithID,
  updateOneWithID,
  deleteOneWithID,
} from "./helper/todoFucs.js";

const app = express();

/* Middleware */

app.use(Cors());
app.use(express.json());

/* ROUTES */

// Create a todo
app.post("/todos", createTodo);

// Get all todos
app.get("/todos", getAll);

// Get a todo
app.get("/todos/:id", getTodoWithID);

// Update a todo
app.put("/todos/:id", updateOneWithID);

// Delete a todo
app.delete("/todos/:id", deleteOneWithID);

app.listen(5000, () => console.log("http://localhost:5000"));
