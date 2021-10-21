import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { env } from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});

  const config = new DocumentBuilder()
    .setTitle('Gitlab Apis')
    .setDescription('Have fun testing')
    .setVersion('1.0')
    .addTag('Gitlab Apis')
    .addBearerAuth()
    .addServer('https://localhost/api/v4')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  
  await app.listen(3000);
}
bootstrap();
