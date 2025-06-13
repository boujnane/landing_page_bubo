# Stage 1: Build
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the Astro project
RUN npm run build

# Stage 2: Serve
FROM node:20-alpine

# Install a simple static server (or use astro preview if preferred)
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy built files from previous stage
COPY --from=builder /app/dist ./dist
# Expose port
EXPOSE 3000

# Start the server
CMD ["serve", "dist", "-l", "3000"]
