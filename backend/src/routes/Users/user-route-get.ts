import { Application } from "express"
import { GetSingleUser } from "../../services/users/serviceFunction-users"
import { ErrorResponse } from "../../ErrorResponse/error-response"

export default (app: Application): void => {
  // this to get single user ß
  app.get("/user_id/:id", async (req: any, res: any) => {
    const UserId = req.params.id
    try {
      const getUsers = await GetSingleUser(UserId)
      res.status(200).send(getUsers)
    } catch (error) {
      res.status(((error as unknown) as ErrorResponse).code).send(error)
    }
  })
}
