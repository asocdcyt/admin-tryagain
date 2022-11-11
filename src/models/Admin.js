import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const AdminSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

AdminSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

AdminSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default model("Admin", AdminSchema);
