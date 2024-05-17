import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'prisma/prisma-client';
export interface IUser {
    CreateUser(data: CreateUserDto): Promise<User>;
    DeleteUser(id: string): Promise<boolean>;
    findByFirstName(firstName: string): Promise<User>;
    findByLastName(lastName: string): Promise<User>;
    findByUserId(id: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    UpdateProperty(id: any, properties: any): Promise<User>;
    findByEmail(email: string): Promise<User>;
}
