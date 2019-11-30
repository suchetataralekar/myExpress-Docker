From node:alpine

WORKDIR /app 

COPY . .

EXPOSE 80
CMD node server.js