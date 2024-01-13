# Use an official Node.js LTS image as a base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
# RUN npx -p npm@6 npm i --legacy-peer-deps 
RUN npm install 

# Copy the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port your app will run on (useful for local testing)
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]









# # Name the node stage "builder"
# FROM node:alpine AS builder
# # Set working directory
# WORKDIR /app
# # Copy all files from current directory to working dir in image
# COPY . .
# # install node modules and build assets
# RUN npm install && npm run build

# # nginx state for serving content
# FROM nginx:alpine
# # Set working directory to nginx asset directory
# WORKDIR /usr/share/nginx/html
# # Remove default nginx static assets
# RUN rm -rf ./*
# # Copy static assets from builder stage
# COPY --from=builder /app/build .
# # Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]