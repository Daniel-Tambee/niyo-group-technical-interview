import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'prisma/prisma-client';
export interface IAuth {
    SignUp(data: CreateUserDto): Promise<User>;
    SignIn(data: Partial<User>): Promise<string>;
    ForgotPassword(id: string, email: string): Promise<true>;
}
