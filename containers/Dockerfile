FROM node:alpine

#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app

COPY package.json package.json
RUN npm install

COPY testn.js .
EXPOSE 80
CMD [  "npm" , "start" ]
