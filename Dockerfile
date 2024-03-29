# STEP 1 build static website
FROM node:alpine as builder

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json /app/
RUN npm ci

# Copy project files into the docker image
COPY .  /app
RUN npm run build

# STEP 2 build a small nginx image with static website
FROM nginx:alpine

## Remove default nginx website
#RUN rm -rf /usr/share/nginx/html/*

# Create the directories we will need
RUN mkdir -p /var/log/nginx

# Copy the respective nginx configuration files
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

## From 'builder' copy website to default nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["./docker-bootstrap.sh", "/usr/share/nginx/html"]
