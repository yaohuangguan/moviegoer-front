FROM node:15 AS build
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . ./

ENV PORT 8080
EXPOSE $PORT

CMD ["yarn","run","dev"]