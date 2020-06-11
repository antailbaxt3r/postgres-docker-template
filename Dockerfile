FROM node:alpine

WORKDIR /usr/src/postgres-template

COPY package*.json ./
RUN npm install

COPY ./ ./

EXPOSE 4193

CMD ["npm", "start"]