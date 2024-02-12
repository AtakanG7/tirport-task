import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Carrier {
    @PrimaryGeneratedColumn()
    carrier_id: number;

    @Column()
    username: string;
}
