import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';


const PORT = process.env.PORT || 4000
const APP_NAME =process.env.APP_NAME || 'Api whitout name';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs:true
  });

  app.useGlobalPipes(
      new ValidationPipe({
        whitelist:true,
        forbidNonWhitelisted: true
      })
  )

  app.enableCors({
    allowedHeaders: '*',
    origin: '*'
  });

  app.use(helmet());

  const config = new DocumentBuilder()
      .setTitle('tamplate-nestjs')
      .setDescription('tamplate-nestjs')
      .setVersion('1.0')
      .addTag('tamplate')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(PORT, ()=> {
    Logger.log(`${APP_NAME} running in port ${PORT} 🚀`, 'bootstrap')
  });
}
bootstrap();
