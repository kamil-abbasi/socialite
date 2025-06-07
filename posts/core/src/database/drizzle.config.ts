import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './schemas',
  dialect: 'postgresql',
  dbCredentials: {
    database: process.env.DB_NAME!,
    host: process.env.DB_HOST!,
    user: process.env.DB_USER!,
    port: parseInt(process.env.DB_PORT!),
    password: process.env.DB_PASSWORD!,
  },
  strict: true,
  verbose: true,
});
