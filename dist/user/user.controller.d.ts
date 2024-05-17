import { Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './user.interface';
import { User } from 'prisma/prisma-client';
export declare class UserController implements IUser {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService, logger: Logger);
    findByFirstName(firstName: string): Promise<User>;
    findByLastName(lastName: string): Promise<User>;
    findByUserId(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    UpdateProperty(id: string, properties: {}): Promise<User>;
    CreateUser(data: CreateUserDto): Promise<{
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        phone_number: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    DeleteUser(id: string): Promise<boolean>;
}
