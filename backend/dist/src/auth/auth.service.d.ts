import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity/user.entity';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { Response } from 'express';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<User | null>;
    login(loginDto: LoginDto, response: Response): Promise<void>;
    signup(signupDto: SignupDto): Promise<void>;
}
