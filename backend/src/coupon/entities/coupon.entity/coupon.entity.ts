import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coupon {
    @PrimaryGeneratedColumn()
    coupon_id: number;

    @Column()
    carrier_id: number;

    @Column()
    start_region: string;

    @Column()
    end_region: string;

    @Column()
    price: number;
}
