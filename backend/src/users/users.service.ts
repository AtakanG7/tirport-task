import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/users/entities/user.entity/user.entity';
import { Follow } from '@/users/entities/user.entity/follow.entity'; // Assuming the Follow entity exists
import { Carrier } from '@/carriers/entities/carriers.entity/carriers.entity'; // Assuming the Carrier entity exists

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Follow) // Inject the Follow repository
    private readonly followRepository: Repository<Follow>,
    @InjectRepository(Carrier) // Inject the Carrier repository
    private readonly carrierRepository: Repository<Carrier>,
  ) {}

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  async findOneByUserid(user_id: number): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { user_id } });
  }
  
  async create(user: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async getFavoriteCarriers(user_id: number): Promise<Carrier[]> {
    // Fetch the carrierIds that the user is following
    const follows = await this.followRepository.find({ where: { user_id } });

    // Extract the carrierIds from follows
    const carrierIds = follows.map(follow => follow.carrier_id);

    // Fetch the carriers based on the extracted carrierIds
    return this.carrierRepository.findByIds(carrierIds);
  }
}
