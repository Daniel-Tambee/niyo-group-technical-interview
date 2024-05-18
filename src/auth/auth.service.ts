import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { IAuth } from './auth.interface';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'prisma/prisma-client';
import { UserService } from 'src/user/user.service';
import { DbService } from 'src/database/db.service';
import { JwtService } from '@nestjs/jwt';
import { verify, hash } from 'argon2';

@Injectable()
export class AuthService implements IAuth {
  /**
   *
   */
  constructor(
    private readonly user: UserService,
    private readonly Db: DbService,
    private readonly jwt: JwtService,
  ) {}
  SignUp(data: CreateUserDto): Promise<User> {
    return this.user.CreateUser(data);
  }
  async SignIn(data: Partial<User>): Promise<string> {
    try {
      let user = await this.user.findByEmail(data['email']);
      let verification = await verify(
        user['password'],
        Buffer.from(data['password']),
        {
          secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
        },
      );
      if (user && verification) {
        const { ...result } = user;
        result;
      } else {
        throw new UnauthorizedException();
      }
      let token = this.jwt.sign(user, {
        secret: process.env.HASH_SECRET || 'hash',
      });
      return token;
    } catch (error) {
      throw new UnauthorizedException(undefined, {
        description: 'wrong email or password',
      });
    }
  }
  async ForgotPassword(id: string, password: string): Promise<true> {
    try {
      let query = await this.Db.user.update({
        data: {
          password: await hash(password, {
            secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
            type: 0,
          }),
        },
        where: {
          id: id,
        },
      });
      return true;
    } catch (error) {
      throw new BadRequestException(undefined, {
        description: error,
      });
    }
  }
  async validate(data: {}) {
    try {
      let user = await this.user.findByEmail(data['email']);

      let verification = await verify(
        user['password'] as string,
        Buffer.from(data['password']),
        {
          secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
          type: 2,
        },
      );
      console.log(verification);

      if (user && verification) {
        const { ...result } = user;
        return result;
      } else {
        throw new UnauthorizedException();
      }
    } catch (error) {
      throw new UnauthorizedException(undefined, {
        description: 'wrong email or password',
      });
    }
  }
}
