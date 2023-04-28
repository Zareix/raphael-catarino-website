FROM node:20-alpine as build
RUN apk update && apk add build-base curl gcc autoconf automake zlib-dev libpng-dev vips-dev && rm -rf /var/cache/apk/* > /dev/null 2>&1
RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm && chmod +x /bin/pnpm
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV PATH /opt/strapi/node_modules/.bin:$PATH

WORKDIR /opt/strapi
COPY pnpm-lock.yaml pnpm-workspace.yaml .npmrc package.json ./
COPY apps/cms/package.json apps/cms/package.json
RUN npm i --global node-gyp
RUN pnpm --filter cms i --prod --shamefully-hoist
COPY . .
RUN pnpm docker:cms:build


FROM node:20-alpine as runner
RUN apk add vips-dev curl && rm -rf /var/cache/apk/*
RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" -o /bin/pnpm && chmod +x /bin/pnpm
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV PATH /opt/strapi/node_modules/.bin:$PATH
EXPOSE 1337

WORKDIR /opt/strapi
COPY --from=build /opt/strapi ./

CMD ["pnpm", "docker:cms:serve"]
