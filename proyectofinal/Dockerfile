#hub.docker.com
#fase 1 build app
FROM node:22.11 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#fase 2 send build to nginx
FROM nginx:1.27
COPY --from=build /app/dist/proyectofinal /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g", "daemon off;"]