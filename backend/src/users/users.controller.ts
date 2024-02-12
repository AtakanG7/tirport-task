import { Controller, Post, Get, Body, Param, Req, Res  } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@/users/entities/user.entity/user.entity';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { redirect } from 'react-router-dom';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() User: User): Promise<User> {
    return this.usersService.create(User);
  }

  @Get(':id')
  async getUser(@Req() request: Request, @Res() response: Response): Promise<User> {
    try {
      const token = request.cookies['token']; // Retrieve token from HTTP-only cookie
      if (!token) {
        // Redirect to login page if token is not found
        redirect('/login'); // Adjust the URL according to your login page route
        return
      }
      // Verify the JWT token and decode it
      const decodedToken = this.decodeJwtToken(token);
      const userId = decodedToken.user_id; // Extract user_id from decoded token
  
      return this.usersService.findOneByUserid(userId);
    } catch (error) {
      // If token verification fails (expired or invalid token), redirect to login page
      redirect('/login');
      return
    }
  }

  private decodeJwtToken(token: string): any {
    // Verify and decode JWT token using your preferred method/library
    // This example assumes you are using jwt.verify from the jsonwebtoken library
    return jwt.verify(token, 'secret');
  }
}