import { Application } from "express"
import { GetAllUsers } from "../../services/users/serviceFunction-users"
import { ErrorResponse } from "../../ErrorResponse/error-response"

export default (app: Application): void => {
  // this to get all events
  app.get("/vaccine_passport/users", async (req: any, res: any) => {
    try {
      const getUsers = await GetAllUsers()
      res.status(200).send(getUsers)
    } catch (error) {
      res.status(((error as unknown) as ErrorResponse).code).send(error)
    }
  })
}
