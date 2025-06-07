import { Injectable, OnApplicationShutdown } from '@nestjs/common';

import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService implements OnApplicationShutdown {
  constructor(private readonly databaseService: DatabaseService) { }

  async onApplicationShutdown() {
    await this.databaseService.close();
  }
}
