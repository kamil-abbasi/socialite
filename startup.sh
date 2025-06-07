#!/bin/sh

docker compose up -d --build

docker compose exec users npx drizzle-kit push --force
docker compose exec posts npx drizzle-kit push --force
docker compose restart posts users gateway