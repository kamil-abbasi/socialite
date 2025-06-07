import { sql } from 'drizzle-orm';
import { pgTable, uuid, varchar, timestamp, text } from 'drizzle-orm/pg-core';

const postsTable = pgTable('posts', {
  id: uuid().primaryKey().defaultRandom().notNull(),
  title: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull(),
  content: varchar({ length: 2500 }).notNull(),
  tags: text()
    .array()
    .default(sql`'{}'::text[]`),
  userId: varchar({ length: 255 }).notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp()
    .notNull()
    .defaultNow()
    .$onUpdateFn(() => new Date()),
});

export { postsTable };
