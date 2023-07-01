import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from './common/class/google-login';

@Module({
  imports: [
    AuthModule,
    PassportModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'views'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
