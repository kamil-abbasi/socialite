import { pgTable, uuid, pgEnum } from 'drizzle-orm/pg-core';

const genderEnum = pgEnum('gender', ['male', 'female']);

const usersTable = pgTable('users', {
  id: uuid().primaryKey().notNull().defaultRandom(),
  gender: genderEnum(),
  keycloakUserId: uuid().notNull().unique(),
});

export { usersTable, genderEnum };
