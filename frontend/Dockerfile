FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
RUN chmod -R 750 .next

EXPOSE 3003

CMD npm run dev