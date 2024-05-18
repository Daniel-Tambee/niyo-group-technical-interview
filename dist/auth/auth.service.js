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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const db_service_1 = require("../database/db.service");
const jwt_1 = require("@nestjs/jwt");
const argon2_1 = require("argon2");
let AuthService = class AuthService {
    constructor(user, Db, jwt) {
        this.user = user;
        this.Db = Db;
        this.jwt = jwt;
    }
    SignUp(data) {
        return this.user.CreateUser(data);
    }
    async SignIn(data) {
        try {
            let user = await this.user.findByEmail(data['email']);
            let verification = await (0, argon2_1.verify)(user['password'], Buffer.from(data['password']), {
                secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
            });
            if (user && verification) {
                const result = __rest(user, []);
                result;
            }
            else {
                throw new common_1.UnauthorizedException();
            }
            let token = this.jwt.sign(user, {
                secret: process.env.HASH_SECRET || 'hash',
            });
            return token;
        }
        catch (error) {
            throw new common_1.UnauthorizedException(undefined, {
                description: 'wrong email or password',
            });
        }
    }
    async ForgotPassword(id, password) {
        try {
            let query = await this.Db.user.update({
                data: {
                    password: await (0, argon2_1.hash)(password, {
                        secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
                        type: 0,
                    }),
                },
                where: {
                    id: id,
                },
            });
            return true;
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined, {
                description: error,
            });
        }
    }
    async validate(data) {
        try {
            let user = await this.user.findByEmail(data['email']);
            let verification = await (0, argon2_1.verify)(user['password'], Buffer.from(data['password']), {
                secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
                type: 2,
            });
            console.log(verification);
            if (user && verification) {
                const result = __rest(user, []);
                return result;
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (error) {
            throw new common_1.UnauthorizedException(undefined, {
                description: 'wrong email or password',
            });
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        db_service_1.DbService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map