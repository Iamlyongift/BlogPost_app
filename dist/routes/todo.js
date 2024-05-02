"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const todoController_1 = require("../controllers/todoController");
const router = express_1.default.Router();
router.post("/create_todo", auth_1.default, todoController_1.createTodo);
router.put("/update_todo/:id", auth_1.default, todoController_1.updateTodo);
router.get("/get_all_todos", auth_1.default, todoController_1.getTodos);
router.get("/get_single_todos/:id", auth_1.default, todoController_1.singleTodo);
router.get("/get_all_todos/:userId", auth_1.default, todoController_1.getUserTodos);
router.delete("/delete_single_todo/:id", auth_1.default, todoController_1.deleteSingleTodo);
exports.default = router;
