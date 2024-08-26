FROM node:22-alpine

USER app

WORKDIR /app

COPY package*.json ./

USER root

RUN RUN chown -R app:app

USER app

RUN npm install

COPY . .

EXPOSE 4000

CMD npm start