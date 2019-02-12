import { Schema, model } from "mongoose";

const userSchema = Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = model("User", userSchema);
