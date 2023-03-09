# Specify a base image
FROM node:14-alpine

# put app into this working directory folder instead of with root files
WORKDIR /usr/app

# Get the files from local machine and put them in container destination
COPY ./package.json ./ 

#Install needed dependencies
RUN npm install
COPY ./ ./ 

#Setup default command
CMD ["npm", "start"]