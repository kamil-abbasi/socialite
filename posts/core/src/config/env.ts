export const config = {
  port: parseInt(process.env.PORT || '3000'),
  db: {
    name: process.env.DB_NAME!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    port: parseInt(process.env.DB_PORT || '5432'),
    host: process.env.DB_HOST!,
  },
};
