docker compose --profile gateway up -d --build
docker compose exec users npx drizzle-kit push --force --config=/app/src/database/drizzle.config.ts
docker compose restart users