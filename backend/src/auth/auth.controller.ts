import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express'; // Import Response object

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')    
  async login(@Body() loginDto: LoginDto, @Res() response: Response) {
    await this.authService.login(loginDto, response); // Pass the response object
    return { message: 'Login successful' }; // Optionally, return a success message
  }
  
  @Post('signup')
  async signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}