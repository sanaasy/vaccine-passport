import { Application } from "express"
import { PostUser } from "../../services/users/serviceFunction-users"
import { ErrorResponse } from "../../ErrorResponse/error-response"

export default (app: Application): void => {
  // this to post user
  app.post("/vaccine_passport/users", async (req: any, res: any) => {
    try {
      const postUser = await PostUser(req.body)
      res.status(201).send(postUser)
    } catch (error) {
      res.status(((error as unknown) as ErrorResponse).code).send(error)
    }
  })
}
