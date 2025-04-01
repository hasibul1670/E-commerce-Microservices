import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { LoggingModule } from './logging.module';

async function bootstrap() {
  const app = await NestFactory.create(LoggingModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.port ?? 5000);
}
bootstrap();
