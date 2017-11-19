FROM node:8.5.0

WORKDIR /usr/src/api

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080
CMD ["npm", "start"];