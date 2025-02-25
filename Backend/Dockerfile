# Stage 1: Install dependencies
FROM node:14-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install dependencies without devDependencies for production
RUN npm install --omit=dev

# Copy all source files
COPY . .

# Stage 2: Production image
FROM node:14-alpine

WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app /app

# Expose the application port
EXPOSE 3000

# Start the Express.js server
CMD ["node", "server.js"]

