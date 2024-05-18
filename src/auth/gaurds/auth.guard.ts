import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { User } from 'prisma/prisma-client';
import { PassportStrategy } from '@nestjs/passport';
import { verify } from 'jsonwebtoken';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard
  extends PassportStrategy(Strategy)
  implements CanActivate
{
  /**
   *
   */
  constructor(private readonly auth: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.HASH_SECRET || 'hash',
    });
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const HeaderbearerToken = context.switchToHttp().getRequest()['headers'][
        'authorization'
      ] as string;
      const bearerToken = verify(
        HeaderbearerToken,
        process.env.HASH_SECRET || 'hash',
      );
      const val = this.validate(bearerToken as string);
      return Boolean(val);
    } catch (error) {
      console.log(error.message + ',\njwt is missing');
    }
  }
  async validate(bearerToken: string) {

    const user = await this.auth.validate(bearerToken as unknown as User);
    return user;
  }
}
