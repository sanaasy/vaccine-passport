import { Application } from "express"
import { ErrorResponse } from "../ErrorResponse/error-response"

export default (app: Application): void => {
  // main route in the app
  app.get("/", async (req: any, res: any) => {
    try {
      const mainMessage = "This is for main "
      res.status(200).send(mainMessage)
    } catch (error) {
      res.status(((error as unknown) as ErrorResponse).code).send(error)
    }
  })
}
