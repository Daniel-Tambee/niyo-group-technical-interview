import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'prisma/prisma-client';
export interface IAuth {
  /**
   * a function that wraps around the createUser() to create users
   * @param data
   */
  SignUp(data: CreateUserDto): Promise<User>;
  /**
   *a function that takes in an email,password and then issues a jwt token
   * @param data
   */
  SignIn(data: Partial<User>): Promise<string>;
  /**
   * a function that updates a user's password
   *@param password
   *@param id
   */
  ForgotPassword(id: string, password: string): Promise<true>;
}
