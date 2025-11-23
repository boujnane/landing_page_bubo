# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Run
FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

# Copier le build complet
COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Lancer le serveur Astro SSR
CMD ["node", "dist/server/entry.mjs"]
