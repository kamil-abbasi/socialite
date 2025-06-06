import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello, World!';
  }

  @Get('/healthcheck')
  @HttpCode(204)
  healthcheck() { }
}
