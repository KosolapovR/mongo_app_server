FROM node:latest

WORKDIR /app

COPY package.json /app

RUN npm install --silent

COPY . /app

CMD ["node", "src/index.js"]
