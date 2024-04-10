FROM nginx:latest

COPY ./templates /usr/share/nginx/html

RUN chown -R nginx:nginx /usr/share/nginx/html



