import { Repository } from 'typeorm';
import { Coupon } from './entities/coupon.entity/coupon.entity';
export declare class CouponService {
    private readonly couponRepository;
    constructor(couponRepository: Repository<Coupon>);
    getCouponsForUserAndCarrier(userId: number, carrierId: number): Promise<Coupon[]>;
}
