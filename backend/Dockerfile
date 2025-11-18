FROM node:20.9.0-alpine

WORKDIR /app

COPY ./backend/package*.json ./
COPY ./backend/tsconfig.json ./
COPY ./backend/tsconfig.docker.json ./

RUN npm install

COPY ./shared /app/shared

COPY ./backend/src /app/src

RUN npm run build:docker

EXPOSE 5000

CMD ["node", "dist/src/server.js"]