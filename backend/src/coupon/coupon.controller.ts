import { Controller, Get, Param } from '@nestjs/common';
import { CouponService } from './coupon.service';

@Controller('coupons')
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  @Get(':userId/:carrierId')
  async getCouponsForUserAndCarrier(
    @Param('userId') userId: number,
    @Param('carrierId') carrierId: number,
  ) {
    return this.couponService.getCouponsForUserAndCarrier(userId, carrierId);
  }
}
