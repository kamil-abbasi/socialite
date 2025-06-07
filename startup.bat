docker compose up -d --build

docker compose exec users npx drizzle-kit push --force --config=/app/src/database/drizzle.config.ts
docker compose exec posts npx drizzle-kit push --force --config=/app/src/database/drizzle.config.ts

docker compose restart posts users gateway