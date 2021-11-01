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
  app.use(function (req, res, next) {
    res.header("Access-Controll-Allow-Origin", "*");
    res.header("Access-Controll-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  await app.listen(3000);
}
bootstrap();
