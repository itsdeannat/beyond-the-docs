# The base image I need (Node)
FROM node:26-bookworm-slim 

# Directory on host machine where Docker gets files
WORKDIR /app

# Copy dependency files to the host machine
COPY package.json package-lock.json ./

RUN npm ci

# Copy the entire directory to the host machine
COPY . .

RUN npm run build