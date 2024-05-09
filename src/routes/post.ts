import express from "express";
import auth from "../library/middlewares/auth";
import { upload } from "../library/helpers/uploadImage";
import {
  createPost,
  updatePost,
  getTodos,
  getUserTodos,
  deleteSingleTodo,
  singleTodo,
} from "../controllers/blogController";

const router = express.Router();

/* GET home page. */
router.post("/create_post", auth, upload.array("pictures", 6), createPost);
router.put("/update_post/:id", auth, upload.array("pictures", 6), updatePost);
router.get("/get_all_todos", auth, getTodos);
router.get("/get_single_todos/:id", auth, singleTodo);
router.get("/get_all_todos/:userId", auth, getUserTodos);
router.delete("/delete_single_todo/:id", auth, deleteSingleTodo);

export default router;
