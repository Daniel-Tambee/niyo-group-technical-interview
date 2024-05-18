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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/gaurds/auth.guard");
let UserController = class UserController {
    constructor(userService, logger) {
        this.userService = userService;
        this.logger = logger;
    }
    findByFirstName(firstName) {
        return this.userService.findByFirstName(firstName);
    }
    findByLastName(lastName) {
        return this.userService.findByLastName(lastName);
    }
    findByUserId(id) {
        return this.userService.findByUserId(id);
    }
    findByEmail(email) {
        throw new Error('Method not implemented.');
    }
    getAllUsers() {
        return this.userService.getAllUsers();
    }
    UpdateProperty(id, properties) {
        return this.userService.UpdateProperty(id, properties);
    }
    CreateUser(data) {
        return this.userService.CreateUser(data);
    }
    DeleteUser(id) {
        return this.userService.DeleteUser(id);
    }
};
__decorate([
    (0, common_1.Get)('findByFirstName'),
    __param(0, (0, common_1.Query)('firstName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findByFirstName", null);
__decorate([
    (0, common_1.Get)('findByLastName'),
    __param(0, (0, common_1.Query)('lastName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findByLastName", null);
__decorate([
    (0, common_1.Post)('findByUserId'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findByUserId", null);
__decorate([
    (0, common_1.Get)('getAllUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Post)('UpdateProperties'),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "UpdateProperty", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "CreateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "DeleteUser", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [user_service_1.UserService,
        common_1.Logger])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map