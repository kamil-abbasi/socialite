#!/bin/sh

docker compose --profile gateway up -d --build
docker compose exec users npx drizzle-kit push --force
docker compose restart users