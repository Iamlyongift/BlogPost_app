import { Request, Response } from "express";
import { creatTodoSchema, updateTodoSchema, option } from "../utils/utils";
import Todo from "../model/todoModel";

export const createTodo = async (req: Request | any, res: Response) => {
  try {
    const verify = req.user;

    //validate todo form inputs
    const validateUser = creatTodoSchema.validate(req.body, option);

    if (validateUser.error) {
      res.status(400).json({ Error: validateUser.error.details[0].message });
    }

    const newTodo = await Todo.create({
      ...req.body,
      user: verify._id,
    });

    return res
      .status(200)
      .json({ message: "Todo created successfully", newTodo });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { description, completed } = req.body;
    const { id } = req.params;
    //validate todo form inputs
    const validateUser = updateTodoSchema.validate(req.body, option);

    if (validateUser.error) {
      res.status(400).json({ Error: validateUser.error.details[0].message });
    }

    const todo = await Todo.findById({ _id: id });

    if (!todo) {
      return res.status(400).json({
        error: "Todo not found",
      });
    }
    const updateRecord = await Todo.findByIdAndUpdate(id,
      {
        description,
        completed,
      },

      {
        new: true,
        runValidators: true,
        context: "query",
      }
    );

    if (!updateRecord) {
      return res.status(404).json({
        msg: "Todo not updated",
      });
    }

    return res.status(200).json({
      message: "Todo updates successfully",
      updateRecord,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTodos = async (req: Request, res: Response) => {
  try {
    const getAllUserTodos = await Todo.find().populate("user");

    res.status(200).json({
      msg: "Todos successfully fetched",
      getAllUserTodos,
    });
  } catch (error) {
    console.log(error);
  }
};

export const singleTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const getsingleTodos = await Todo.findById(id);

    if (!getsingleTodos) {
      return res.status(400).json({
        error: "todo not found",
      });
    }
    res.status(200).json({
      msg: "Todos successfully fetched",
      getsingleTodos
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserTodos = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const getAllUserTodos = await Todo.find({ user: userId });

    res.status(200).json({
      msg: "Todos successfully fetched",
      getAllUserTodos,
    });
  } catch (error) {
    console.log(error);
  }
};



export const deleteSingleTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteSingleRecord = await Todo.findByIdAndDelete(id)
    if (!deleteSingleRecord) {
      return res.status(400).json({
        error: "Todo not found",
      });
    }

    res.status(200).json({
      message: "Todo successfully deleted",
      deleteSingleRecord
    });
  } catch (error) {
    console.error("Problem deleting todo");
  }
};
