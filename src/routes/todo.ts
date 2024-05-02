import express from "express";
import auth from "../middlewares/auth";
import {
  createTodo,
  updateTodo,
  getTodos,
  getUserTodos,
  deleteSingleTodo,
  singleTodo
} from "../controllers/todoController";

const router = express.Router();

/* GET home page. */
router.post("/create_todo", auth, createTodo);
router.put("/update_todo/:id", auth, updateTodo);
router.get("/get_all_todos", auth, getTodos);
router.get("/get_single_todos/:id", auth, singleTodo);
router.get("/get_all_todos/:userId", auth, getUserTodos);
router.delete("/delete_single_todo/:id", auth, deleteSingleTodo);

export default router;
