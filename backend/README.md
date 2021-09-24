# VaccinePassport BackEnd

## This a backend REST API service with two entry points /users

#### 1st make sure that mangodb server is working locally and mangodb is installed

    brew tap mongodb/brew
    brew install mongodb-community
    brew services start mongodb-community

### the structure of the repo

    .
    ├── README.md   <-- This instruction file
    ├── Dockerfile      <-- This to run the app in docker container
    ├── src/
            ├── ErrorResponse/    <-- This for the type of the errorResposonse
            ├── models/           <-- This the schema for the mangodb
            ├── routes/           <-- This is the api routes
            ├── services/         <-- This the service Functions for the api
            ├── Types/            <-- Type for the return value of the service Functions
            ├── app.ts            <-- This the main file to run the nodejs app

#### Use NPM to run the app

    "npm run start"  from the main directory
    the database should be running on mongodb://127.0.0.1:27017
