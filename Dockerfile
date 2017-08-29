FROM node:alpine

# Create app directory
WORKDIR /usr/src/

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy source files
COPY . .

ENV PORT 5000
EXPOSE $PORT

CMD [ "yarn", "start" ]
