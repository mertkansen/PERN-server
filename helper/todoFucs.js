import { pool } from "../db.js";

export const createTodo = async (req, res) => {
  try {
    const { description } = req.body;

    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );

    res.status(200).send(newTodo.rows[0]);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getAll = async (req, res) => {
  try {
    const { description } = req.body;

    const newTodo = await pool.query("SELECT * FROM todo");

    res.status(200).send(newTodo.rows);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getTodoWithID = async (req, res) => {
  const { id } = req.params;

  try {
    const { description } = req.body;

    const newTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.status(200).send(newTodo.rows);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const updateOneWithID = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  try {
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    res.status(200).send("successfully updated");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const deleteOneWithID = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.status(200).send("Successfully deleted");
  } catch (err) {
    res.status(400).send(err.message);
  }
};
