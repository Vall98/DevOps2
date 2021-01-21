#FROM ionic
#COPY --from=ionic app.apk /usr/share/nginx/html/app.apk

FROM nginx
COPY ./front/www /usr/share/nginx/html
COPY ./config/nginx/nginx.conf /etc/nginx/conf.d/default.conf