import { UsersService } from './users.service';
import { User } from '@/users/entities/user.entity/user.entity';
import { Request } from 'express';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(User: User): Promise<User>;
    getUser(request: Request, response: Response): Promise<User>;
    private decodeJwtToken;
}
