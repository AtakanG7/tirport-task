import { Repository } from 'typeorm';
import { User } from '@/users/entities/user.entity/user.entity';
import { Follow } from '@/users/entities/user.entity/follow.entity';
import { Carrier } from '@/carriers/entities/carriers.entity/carriers.entity';
export declare class UsersService {
    private readonly userRepository;
    private readonly followRepository;
    private readonly carrierRepository;
    constructor(userRepository: Repository<User>, followRepository: Repository<Follow>, carrierRepository: Repository<Carrier>);
    findOneByUsername(username: string): Promise<User | undefined>;
    findOneByUserid(user_id: number): Promise<User | undefined>;
    create(user: Partial<User>): Promise<User>;
    getFavoriteCarriers(user_id: number): Promise<Carrier[]>;
}
