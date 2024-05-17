import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './user.interface';
import { DbService } from 'src/database/db.service';
import { User } from 'prisma/prisma-client';
import { hash } from 'argon2';

@Injectable()
export class UserService implements IUser {
  /**
   *
   */
  constructor(
    private readonly db: DbService,
    private readonly logger: Logger,
  ) {}
  async CreateUser(data: CreateUserDto): Promise<User> {
    try {
      this.logger.log(data);
      let query = await this.db.user.create({
        data: {
          email: data['email'],
          first_name: data['first_name'],
          last_name: data['last_name'],
          phone_number: data['phone_number'],
          password: await hash(data['password'] as string, {
            secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
            type: 0,
          }),
        },
      });
      return query;
    } catch (error) {
      console.log(error);

      throw new BadRequestException(error.message);
    }
  }
  async DeleteUser(id: string): Promise<boolean> {
    try {
      this.logger.log(id);
      let query = await this.db.user.delete({
        where: {
          id: id,
        },
      });
      return true;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async findByEmail(email: string): Promise<User> {
    try {
      this.logger.log(email);
      let query = await this.db.user.findFirstOrThrow({
        where: {
          email: email,
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findByFirstName(firstName: string): Promise<User> {
    try {
      this.logger.log('cool');
      let query = await this.db.user.findFirstOrThrow({
        where: {
          first_name: firstName,
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async findByLastName(lastName: string): Promise<User> {
    try {
      this.logger.log(lastName);
      let query = await this.db.user.findFirstOrThrow({
        where: {
          first_name: lastName,
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async findByUserId(id: string): Promise<User> {
    try {
      this.logger.log(id);
      console.log(id);

      let query = await this.db.user.findUnique({
        where: {
          id: id,
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
  async getAllUsers(): Promise<User[]> {
    try {
      let query = await this.db.user.findMany();
      return query;
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException(error);
    }
  }
  async UpdateProperty(id: string, properties: UpdateUserDto): Promise<User> {
    try {
      this.logger.log({
        id,
        properties,
      });
      let query = await this.db.user.update({
        data: {
          first_name: properties['first_name'],
          last_name: properties['last_name'],
          phone_number: properties['phone_number'],
          email: properties['email'],
        },
        where: {
          id: id,
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
