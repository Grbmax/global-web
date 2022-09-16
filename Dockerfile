FROM node:16.17.0-bullseye-slim
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm ci --only=production
RUN yarn install --production