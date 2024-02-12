import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity/user.entity'; // Import the User entity
import { Follow } from 'src/users/entities/user.entity/follow.entity';
import { Carrier } from 'src/carriers/entities/carriers.entity/carriers.entity';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1h' }, // Optional: token expiration
    }),
    TypeOrmModule.forFeature([User, Follow, Carrier]), // Register User and UserRepository
  ],
  providers: [
    AuthService,
    JwtService,
    UsersService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
