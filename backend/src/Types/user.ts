import { Document } from "mongoose"

export interface User extends Document {
  _id: any
  firstName: string
  lastName: string
  age: number
  vaccinted: boolean
  userId: any
}
