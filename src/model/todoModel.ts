import mongoose from "mongoose";

interface TodoType {
  [key: string]: string | boolean | Array<string>;
}

const todoSchema = new mongoose.Schema(
  {
    description: { type: String },
    completed: { type: Boolean },
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model<TodoType>("todo", todoSchema);

export = Todo;
