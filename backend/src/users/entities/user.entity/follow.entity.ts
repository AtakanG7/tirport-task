import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Follow {
    @PrimaryGeneratedColumn()
    user_id: number;

    @PrimaryGeneratedColumn()
    carrier_id: number;
}
