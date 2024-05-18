import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000', '*'],
  });
  const config = new DocumentBuilder()
    .setTitle('Niyo Group Technical Interview')
    .setDescription(
      ' a very basic todo backend built with nestjs and an sqlite database for the purpose of the technical interview along with a websocket server that logs created tasks ',
    )
    .addApiKey({
      name: 'authorization',
      type: 'apiKey',
    })
    .setContact('daniel tambee', '', 'danieltambee@gmail.com')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  await app.listen(process.env.WORKER_PORT || 3000);
  const logger: Logger = new Logger('App', {
    timestamp: true,
  });
  logger.log('app running on ' + 3000);
}
bootstrap();
