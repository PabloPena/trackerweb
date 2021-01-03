FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 443

WORKDIR /usr/share/nginx/html
COPY dist/app/ .