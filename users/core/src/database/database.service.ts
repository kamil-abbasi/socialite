import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres';

import * as schema from './schemas';

type DatabaseConfig = {
  name: string;
  user: string;
  password: string;
  port: number;
  host: string;
};

@Injectable()
export class DatabaseService {
  private config: DatabaseConfig;
  private pool: Pool;
  private logger = new Logger(DatabaseService.name);

  public db: NodePgDatabase<typeof schema>;

  constructor(private configService: ConfigService) {
    this.config = this.configService.get<DatabaseConfig>('db')!;

    const { host, name: database, password, port, user } = this.config;

    this.logger.log('Database configuration loaded!');

    this.pool = new Pool({
      host,
      database,
      password,
      port,
      user,
    });

    this.db = drizzle({
      client: this.pool,
      schema: { ...schema },
    });

    this.logger.log('Database connection established!');
  }

  async close() {
    await this.pool.end();
    this.logger.log('Database connection closed!');
  }
}
