FROM node:16-alpine
RUN apk add --no-cache libc6-compat

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY ./package.json .
RUN yarn config set network-timeout 600000 -g
RUN yarn install

COPY ./build ./build
COPY ./config ./config
COPY ./database ./database
COPY ./public ./public
COPY ./src ./src
COPY ./favicon.ico ./

EXPOSE 1337

CMD ["yarn", "serve"]
