import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  // swagger
  const config = new DocumentBuilder()
    .setTitle('API DOCUMENT')
    .setDescription('수업용 API 문서입니다')
    .setVersion('1.0')
    .addTag('Creative-T API')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = parseInt(process.env.PORT, 10) || 3000;
  await app.listen(port);
  console.log(`Listening on port ${port}`);

  // webpack hot reload
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
