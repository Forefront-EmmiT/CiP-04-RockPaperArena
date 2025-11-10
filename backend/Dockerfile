FROM node:20.9.0-alpine

WORKDIR /app

COPY ./backend/package*.json ./
COPY ./backend/tsconfig.json ./
COPY ./backend/tsconfig.docker.json ./

RUN npm install

COPY ./shared /app/shared

COPY ./backend/src /app/src

RUN npm run build:docker

RUN ls -la /app/dist
RUN test -f /app/dist/server.js && echo "server.js exists!" || echo "server.js NOT found!"

RUN ls -la /app/dist

EXPOSE 5000

CMD ["node", "dist/src/server.js"]