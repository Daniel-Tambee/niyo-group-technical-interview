"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jsonwebtoken_1 = require("jsonwebtoken");
const passport_jwt_1 = require("passport-jwt");
const auth_service_1 = require("../auth.service");
let AuthGuard = class AuthGuard extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(auth) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.HASH_SECRET || 'hash',
        });
        this.auth = auth;
    }
    canActivate(context) {
        try {
            const HeaderbearerToken = context.switchToHttp().getRequest()['headers']['authorization'];
            const bearerToken = (0, jsonwebtoken_1.verify)(HeaderbearerToken, process.env.HASH_SECRET || 'hash');
            const val = this.validate(bearerToken);
            return Boolean(val);
        }
        catch (error) {
            console.log(error.message + ',\njwt is missing');
        }
    }
    async validate(bearerToken) {
        const user = await this.auth.SignIn(bearerToken);
        return user;
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map