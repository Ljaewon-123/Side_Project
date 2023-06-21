import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // <NestExpressApplication>
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://192.168.0.23', 'http://192.185.0.17'],
  });
  await app.listen(80,'0.0.0.0');
}
bootstrap();
