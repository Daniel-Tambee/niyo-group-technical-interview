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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../database/db.service");
const argon2_1 = require("argon2");
let UserService = class UserService {
    constructor(db, logger) {
        this.db = db;
        this.logger = logger;
    }
    async CreateUser(data) {
        try {
            this.logger.log(data);
            let query = await this.db.user.create({
                data: {
                    email: data['email'],
                    first_name: data['first_name'],
                    last_name: data['last_name'],
                    phone_number: data['phone_number'],
                    password: await (0, argon2_1.hash)(data['password'], {
                        secret: Buffer.from(process.env.HASH_SECRET || 'hash'),
                        type: 0,
                    }),
                },
            });
            return query;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error.message);
        }
    }
    async DeleteUser(id) {
        try {
            this.logger.log(id);
            let query = await this.db.user.delete({
                where: {
                    id: id,
                },
            });
            return true;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findByEmail(email) {
        try {
            this.logger.log(email);
            let query = await this.db.user.findFirstOrThrow({
                where: {
                    email: email,
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findByFirstName(firstName) {
        try {
            this.logger.log('cool');
            let query = await this.db.user.findFirstOrThrow({
                where: {
                    first_name: firstName,
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findByLastName(lastName) {
        try {
            this.logger.log(lastName);
            let query = await this.db.user.findFirstOrThrow({
                where: {
                    first_name: lastName,
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async findByUserId(id) {
        try {
            this.logger.log(id);
            console.log(id);
            let query = await this.db.user.findUnique({
                where: {
                    id: id,
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async getAllUsers() {
        try {
            let query = await this.db.user.findMany();
            return query;
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.BadRequestException(error);
        }
    }
    async UpdateProperty(id, properties) {
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
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [db_service_1.DbService,
        common_1.Logger])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map