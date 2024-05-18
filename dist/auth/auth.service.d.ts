import { IAuth } from './auth.interface';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'prisma/prisma-client';
import { UserService } from 'src/user/user.service';
import { DbService } from 'src/database/db.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService implements IAuth {
    private readonly user;
    private readonly Db;
    private readonly jwt;
    constructor(user: UserService, Db: DbService, jwt: JwtService);
    SignUp(data: CreateUserDto): Promise<User>;
    SignIn(data: Partial<User>): Promise<string>;
    ForgotPassword(id: string, password: string): Promise<true>;
    validate(data: {}): Promise<{
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        phone_number: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
