FROM node:14.15.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY tsconfig*.json ./

COPY ./ ./

RUN npm install 


EXPOSE 8081

CMD ["sh","-c", "node -r ts-node/register -r dotenv/config src/app.ts"]

