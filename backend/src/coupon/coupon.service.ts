// Import necessary modules and entities
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coupon } from './entities/coupon.entity/coupon.entity'; // Import Coupon entity

@Injectable()
export class CouponService {
  constructor(
    @InjectRepository(Coupon)
    private readonly couponRepository: Repository<Coupon>,
  ) {}

  async getCouponsForUserAndCarrier(userId: number, carrierId: number): Promise<Coupon[]> {
    // Write a query to fetch coupons for the user and carrier
    const coupons = await this.couponRepository
      .createQueryBuilder('coupon')
      .where('coupon.user_id = :userId', { userId })
      .andWhere('coupon.carrier_id = :carrierId', { carrierId })
      .getMany();
    
    return coupons;
  }
}
