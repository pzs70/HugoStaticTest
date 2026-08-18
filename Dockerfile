# 1. Fázis: Hugo oldal felépítése
FROM floryn90/hugo:ext-alpine AS builder
USER root
WORKDIR /src
COPY . .
RUN chmod -R 777 /src
RUN hugo --gc --minify

# 2. Fázis: Nginx webszerver a statikus fájlok kiszolgálására
FROM nginx:alpine
COPY --from=builder /src/public /usr/share/nginx/html
COPY --from=builder /src/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
