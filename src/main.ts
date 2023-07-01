import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as dotEnv from 'dotenv';

async function bootstrap() {
  const env = dotEnv.config({
    path: join(__dirname, `/.env`),
  }).parsed;
  Object.assign(process.env, env);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets(join(__dirname, 'src', 'views'));
  await app.listen(3000);
}
bootstrap();
