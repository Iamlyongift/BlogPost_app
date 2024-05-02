import mongoose from "mongoose";

interface UserType {
  [key: string]: string | boolean | Array<string>;
}


const userSchema = new mongoose.Schema(
  {
    firstName: {type: String}, 
    lastName: {type: String}, 
    email: {type: String}, 
    password: {type: String}, 
    phoneNumber: {type: String}, 
    country: {type: String}, 
    age:  {type: String}, 
    todos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blog"
      }
    ]

  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<UserType>('User', userSchema)

export = User;