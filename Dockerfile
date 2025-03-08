FROM nginx:1-alpine
COPY apps/main/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d
EXPOSE 80