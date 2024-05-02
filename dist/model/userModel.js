"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    phoneNumber: { type: String },
    country: { type: String },
    age: { type: String },
    todos: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "blog"
        }
    ]
}, {
    timestamps: true,
});
const User = mongoose_1.default.model('User', userSchema);
module.exports = User;
