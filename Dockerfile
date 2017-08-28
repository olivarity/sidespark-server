FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5000
CMD [ "yarn", "start" ]
