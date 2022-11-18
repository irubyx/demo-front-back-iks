# FROM node:alpine as builder
# WORKDIR /usr/app
# COPY . .
# RUN npm install
# EXPOSE 3000
# CMD ["node", "src/server.js"]

FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
#RUN npm install -g serve
COPY . .
CMD ["node","src/server.js"]
#EXPOSE 5000
#CMD ["serve", "-s", "build"]

FROM nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app /usr/share/nginx/html