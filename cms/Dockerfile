FROM node:16-alpine
RUN apk add --no-cache libc6-compat

ENV NODE_ENV=production

WORKDIR /opt/
COPY ./package.json ./yarn.lock ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install

WORKDIR /opt/app
COPY ./ .
RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
