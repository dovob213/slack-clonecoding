import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  await app.listen(process.env.PORT ?? 3000);
  console.log(`listening on port ${port}`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
