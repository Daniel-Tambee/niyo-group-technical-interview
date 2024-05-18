import { IAuth } from './auth.interface';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'prisma/prisma-client';
import { AuthService } from './auth.service';
export declare class AuthController implements IAuth {
    private readonly auth;
    constructor(auth: AuthService);
    SignUp(data: CreateUserDto): Promise<User>;
    SignIn(data: Partial<User>): Promise<string>;
    ForgotPassword(id: string, password: string): Promise<true>;
}
