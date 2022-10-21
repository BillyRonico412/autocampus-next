FROM node:19-alpine3.15

COPY package.json /app/package.json

RUN cd /app && npx pnpm install

COPY . /app/

WORKDIR /app

RUN npx pnpm build

CMD npx pnpm start -p 3030