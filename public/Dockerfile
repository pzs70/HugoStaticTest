# 1. Fázis: Hugo oldal felépítése
FROM klakegg/hugo:ext-ubuntu AS builder
WORKDIR /src
COPY . .
RUN hugo --gc --minify

# 2. Fázis: Nginx webszerver a statikus fájlok kiszolgálására
FROM nginx:alpine
# Beállítjuk a portot, amit a Cloud Run elvár ($PORT = 8080)
COPY --from=builder /src/public /usr/share/nginx/html
COPY --from=builder /src/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
