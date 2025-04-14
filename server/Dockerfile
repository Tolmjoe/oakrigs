FROM node:23-alpine3.21 AS development

WORKDIR /app

COPY package*.json .
RUN  npm ci
COPY . . 


ENV PORT=1234
EXPOSE 1234
CMD [ "npm","run","dev"]



FROM node:23-alpine3.21 AS production

WORKDIR /app

COPY package*.json .
RUN  npm ci
COPY . . 

ENV PORT=1234
EXPOSE 1234
CMD [ "npm","run","start"]

 
