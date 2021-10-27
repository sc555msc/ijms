# Stage 1

#FROM node:14.17.4
#RUN mkdir /src/app
#WORKDIR /src/app

#RUN npm install -g @angular/cli@1.7.1
#COPY . /src/app

#CMD ng serve --host 80 --port 8080



# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/ijms /usr/share/nginx/html

# Expose port 80
EXPOSE 80
