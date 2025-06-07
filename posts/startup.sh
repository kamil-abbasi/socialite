#!/bin/sh

docker compose --profile gateway up -d --build
docker compose exec posts npx drizzle-kit push --force
docker compose restart posts