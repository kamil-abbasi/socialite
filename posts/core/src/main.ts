import { NestFactory } from '@nestjs/core';
import { ConsoleLogger, VersioningType } from '@nestjs/common';
import { json, urlencoded } from 'express';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      prefix: 'Posts',
    }),
  });

  app.enableShutdownHooks();
  app.useGlobalFilters(new HttpExceptionFilter())
  app.use(json(), urlencoded());
  app.enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
