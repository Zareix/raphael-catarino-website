FROM node:18-alpine as build
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev vips-dev && rm -rf /var/cache/apk/* > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/
COPY ./package.json ./
RUN yarn config set network-timeout 600000 -g
RUN yarn install

WORKDIR /opt/app
COPY ./ .

RUN yarn build


FROM node:18-alpine
RUN apk add vips-dev
RUN rm -rf /var/cache/apk/*
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV PATH /opt/node_modules/.bin:$PATH
EXPOSE 1337

WORKDIR /opt/app
COPY --from=build /opt/node_modules ./node_modules
COPY --from=build /opt/app ./

CMD ["yarn", "serve"]
