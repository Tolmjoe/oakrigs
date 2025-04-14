FROM node:23-alpine3.21 AS development

WORKDIR /app
COPY package*.json .
RUN  npm ci
COPY . . 
EXPOSE 3000
CMD [ "npm","start" ]

# build stage........

FROM node:23-alpine3.21 AS build
WORKDIR /app
COPY package*.json .
RUN  npm ci --only=production
COPY . . 
RUN  npm run build

# production stage.....

FROM nginx:1.27.4-alpine-slim AS production
COPY --from=build /app/build/ /usr/share/nginx/html
COPY ./openssl/cert.pem /etc/nginx/certs/
COPY ./openssl/key.pem /etc/nginx/certs/

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
CMD [ "nginx","-g","daemon off;" ]