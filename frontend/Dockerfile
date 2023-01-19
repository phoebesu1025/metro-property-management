FROM node:19

WORKDIR /app
COPY package*.json ./
RUN yarn install --production
COPY . .

EXPOSE 3000

CMD ["npm", "start"]