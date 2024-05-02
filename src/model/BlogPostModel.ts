import mongoose from "mongoose";

interface TodoType {
  [key: string]: string | boolean | Array<string>;
}

const todoSchema = new mongoose.Schema(
  {
    title: { type: String },
    content: { type: String },
    pictures: { type: String},
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

const Blog = mongoose.model<TodoType>("blog", todoSchema);

export = Blog;
