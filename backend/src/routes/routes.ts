import { Application } from "express"
import GetUserId from "./Users/user-route-get"
import PostUser from "./Users/user-route-post"
import GetAllUsers from "./Users/user-route-getall"
import Healtfunction from "./Health-route"

export const RegisterRoutes = (app: Application): void => {
  GetUserId(app)
  PostUser(app)
  GetAllUsers(app)
  Healtfunction(app)
}
