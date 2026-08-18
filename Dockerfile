# 1. Fázis: Hugo oldal felépítése
FROM floryn90/hugo:ext-alpine AS builder
USER root
WORKDIR /src

COPY . .
RUN chmod -R 777 /src
# Itt adjuk meg a baseURL-t:
RUN hugo --gc --minify -b "/"

# 2. Fázis: Caddy webszerver
FROM caddy:alpine
COPY --from=builder /src/public /usr/share/caddy
COPY --from=builder /src/Caddyfile /etc/caddy/Caddyfile

EXPOSE 8080
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
