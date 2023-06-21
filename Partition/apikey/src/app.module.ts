import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { AuthMiddleware } from './middleware/auth.middleware';

@Module({
  imports: [
    ServeStaticModule.forRoot({
        rootPath: join( __dirname ,'..', 'static'),
        // serveRoot :[]  // 정적 앱을 제공할때 제외할 경로, 경고! 'fastify'에서 지원되지 않습니다
        // exclude: ['/api/(.*)'],
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // forRoutes 특정 라우터만 지정 or
  // 전부 지정하고 exclude()로 예외 지정 미들웨어를 어떤식으로 사용할지에 따라 결정 
  configure( consumer: MiddlewareConsumer ){
    consumer.apply(AuthMiddleware).exclude(
      { path: 'static', method: RequestMethod.GET},
      { path: 'static', method: RequestMethod.POST},
      'static/(.*)'
    )
    .forRoutes('')
    
  }
}
