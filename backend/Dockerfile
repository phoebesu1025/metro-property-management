FROM node:19

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .

CMD ["node", "server.js"]