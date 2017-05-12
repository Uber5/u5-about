FROM nginx:1.11
COPY dist /usr/share/nginx/html
COPY nginx-config /etc/nginx/conf.d/default.conf
