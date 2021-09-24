import express, { Application } from "express"
import process from "process"
import { RegisterRoutes } from "./routes/routes"
import { ConnectOptions } from "mongoose"
import { MongoClient } from "mongodb"
import * as dotenv from "dotenv"

const app: Application = express()
const port = process.env.PORT || 8081

app.use(express.json())
dotenv.config()
RegisterRoutes(app)

const config: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions

const url = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/userdb"

const clinet = new MongoClient(url, config)

export const db = clinet.db("userdb")

clinet
  .connect()
  .then(() => {
    console.log(`coneected to database ${url}`)
  })
  .catch((e) => {
    console.log("Not connected")
  })

const server = app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
)

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("App has been terminated!")
  })
})
