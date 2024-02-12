import { CouponService } from './coupon.service';
export declare class CouponController {
    private readonly couponService;
    constructor(couponService: CouponService);
    getCouponsForUserAndCarrier(userId: number, carrierId: number): Promise<import("./entities/coupon.entity/coupon.entity").Coupon[]>;
}
