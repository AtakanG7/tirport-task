import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CouponModule } from './coupon/coupon.module';
import { CarriersModule } from './carriers/carriers.module';
import * as config from '../ormconfig.json';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      ...config,
      type: 'postgres',
      autoLoadEntities: true,
    }),
    CouponModule,
    CarriersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
