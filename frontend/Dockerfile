# Build base
FROM node:22-alpine AS base
LABEL author="DevAnonitos <nguyebao2810@gmail.com>" 

WORKDIR /app

COPY package*.json ./

RUN npm ci

# Build Images
FROM node:22-alpine AS builder
LABEL author="DevAnonitos <nguyebao2810@gmail.com>" 

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules

COPY . . 

RUN npm run build 

# Run Images
FROM node:22-alpine AS runner
LABEL author="DevAnonitos <nguyebao2810@gmail.com>" 

WORKDIR /app

USER node

ENV NODE_ENV="production"

ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder --chown=node:node /app/next.config.mjs ./
COPY --from=builder --chown=node:node /app/public ./public

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

EXPOSE 3003

CMD ["node", "server.js"]

