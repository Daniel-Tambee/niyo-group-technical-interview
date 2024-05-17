import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'prisma/prisma-client';

export interface IUser {
  /**
   * a function that creates users
   * @param data
   */
  CreateUser(data: CreateUserDto): Promise<User>;
  /**
   * a function that deletes user id from the db
   * @param id
   */
  DeleteUser(id: string): Promise<boolean>;
  /**
   * a function that gets a user based based on the first name
   * @param firstName
   */
  findByFirstName(firstName: string): Promise<User>;
  /**
   * a function that gets a user based on the first name
   * @param lastName
   */
  findByLastName(lastName: string): Promise<User>;
  /**
   * a function that fetches a user based on the user id
   * @param id
   */
  findByUserId(id: string): Promise<User>;
  /**
   * a function that gets all the users in the database
   */
  getAllUsers(): Promise<User[]>;
  /**
   * a function that updates fields on the user table given an id passed
   *@param id
   *@param properties
   */
  UpdateProperty(id, properties): Promise<User>;
  /**
   * a function that fetches a user given an email passed
   *@param email
   */
  findByEmail(email: string): Promise<User>;
}
