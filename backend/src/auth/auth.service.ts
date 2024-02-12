// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '../users/entities/user.entity/user.entity';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.usersService.findOneByUsername(username);
    if (user && password) {
      return user;
    }
    return null;
  }

  async login(loginDto: LoginDto, response: Response): Promise<void> {
    const user = await this.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { username: user.username, sub: user.user_id };

    // Generate the JWT token
    const token = this.jwtService.sign(payload, { secret: 'secret' });

    // Set the token as an HTTP-only cookie
    response.cookie('token', token, { httpOnly: true });
  }

  async signup(signupDto: SignupDto): Promise<void> {
    const hashedPassword = bcrypt.hashSync(signupDto.password, 10);
    await this.usersService.create({
      username: signupDto.username,
      password: hashedPassword,
    });
  }
}
