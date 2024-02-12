import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from '@/users/entities/user.entity/user.entity';
import { Follow } from '@/users/entities/user.entity/follow.entity'; // Import Follow entity
import { Carrier } from '@/carriers/entities/carriers.entity/carriers.entity'; // Import Carrier entity

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Follow, Carrier]), // Import the User, Follow, and Carrier entities into the UsersModule
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
