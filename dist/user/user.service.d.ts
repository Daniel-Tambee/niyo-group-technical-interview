import { Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './user.interface';
import { DbService } from 'src/database/db.service';
import { User } from 'prisma/prisma-client';
export declare class UserService implements IUser {
    private readonly db;
    private readonly logger;
    constructor(db: DbService, logger: Logger);
    CreateUser(data: CreateUserDto): Promise<User>;
    DeleteUser(id: string): Promise<boolean>;
    findByEmail(email: string): Promise<User>;
    findByFirstName(firstName: string): Promise<User>;
    findByLastName(lastName: string): Promise<User>;
    findByUserId(id: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    UpdateProperty(id: string, properties: UpdateUserDto): Promise<User>;
    cronThing(): void;
}
