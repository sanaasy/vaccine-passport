import * as mongoose from "mongoose"
import { User } from "../Types/user"

const UserSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  vaccinted: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
})

export const UserModel = mongoose.model<User>("User", UserSchema)
