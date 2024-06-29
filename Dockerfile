FROM webdevops/php-nginx:8.2-alpine
RUN apk add tzdata && cp /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime && echo "Asia/Ho_Chi_Minh" >  /etc/timezone
COPY ./ /app/
COPY nginx /opt/docker/etc/nginx
COPY php/php.ini /opt/docker/etc/php/php.ini
EXPOSE 80
WORKDIR /app
