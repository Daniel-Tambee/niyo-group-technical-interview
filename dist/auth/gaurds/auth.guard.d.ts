import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Strategy } from 'passport-jwt';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
declare const AuthGuard_base: new (...args: any[]) => Strategy;
export declare class AuthGuard extends AuthGuard_base implements CanActivate {
    private readonly auth;
    constructor(auth: AuthService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    validate(bearerToken: string): Promise<string>;
}
export {};
