# Build base
FROM node:22-alpine as build-base
LABEL author="DevAnonitos <nguyebao2810@gmail.com>" 

WORKDIR /app

COPY package*.json ./

RUN npm install \
  && npm cache clean --force

COPY . .

# Build Images
FROM node:22-alpine as build-image
LABEL author="DevAnonitos <nguyebao2810@gmail.com>" 

WORKDIR /app

COPY --from=build-base /app/node_modules ./node_modules

COPY . . 

RUN curl -sf https://gobinaries.com/tj/node-prune | sh

RUN npm run build \
  && rm -rf node_modules \
  && npm install --production \
  && npm prune

# Run Images
FROM node:22-alpine as prod
LABEL author="DevAnonitos <nguyebao2810@gmail.com>" 

WORKDIR /app

COPY --from=build-image /app/node_modules ./node_modules
COPY --from=build-image /app/.next ./next
COPY --from=build-image /app/public ./public
COPY --from=build-image package*.json ./

RUN chmod -R 750 .next

EXPOSE 3003

CMD npm run dev