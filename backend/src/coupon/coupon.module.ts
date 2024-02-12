import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { Coupon } from '@/coupon/entities/coupon.entity/coupon.entity'; // Import the Coupon entity
import { CouponService } from './coupon.service';
import { CouponController } from './coupon.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Coupon])], // Import the Coupon entity into the CouponModule
  providers: [CouponService],
  controllers: [CouponController]
})
export class CouponModule {}
