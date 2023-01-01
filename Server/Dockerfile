FROM node:16
RUN npm i -g nodemon
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 5000
CMD ["npm","run","server"]