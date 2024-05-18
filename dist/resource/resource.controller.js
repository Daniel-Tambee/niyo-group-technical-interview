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
exports.ResourceController = void 0;
const common_1 = require("@nestjs/common");
const resource_service_1 = require("./resource.service");
const create_resource_dto_1 = require("./dto/create-resource.dto");
const auth_guard_1 = require("../auth/gaurds/auth.guard");
let ResourceController = class ResourceController {
    constructor(resourceService) {
        this.resourceService = resourceService;
    }
    CreateTask(data) {
        return this.resourceService.CreateTask(data);
    }
    DeleteTask(id) {
        return this.resourceService.DeleteTask(id);
    }
    findByTitle(title) {
        return this.resourceService.findByTitle(title);
    }
    findByIsDone(flag) {
        return this.resourceService.findByIsDone(flag);
    }
    findByUserId(id) {
        return this.resourceService.findByUserId(id);
    }
    findById(id) {
        return this.resourceService.findById(id);
    }
    getAll() {
        return this.resourceService.getAll();
    }
    UpdateProperty(id, properties) {
        return this.resourceService.UpdateProperty(id, properties);
    }
};
__decorate([
    (0, common_1.Post)('CreateTask'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_resource_dto_1.CreateResourceDto]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "CreateTask", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "DeleteTask", null);
__decorate([
    (0, common_1.Post)('findByTitle'),
    __param(0, (0, common_1.Query)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "findByTitle", null);
__decorate([
    (0, common_1.Post)('findByIsDone'),
    __param(0, (0, common_1.Query)('flag', common_1.ParseBoolPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "findByIsDone", null);
__decorate([
    (0, common_1.Post)('findByUserId'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "findByUserId", null);
__decorate([
    (0, common_1.Post)('findById'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "getAll", null);
__decorate([
    (0, common_1.Patch)('UpdateProperty'),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "UpdateProperty", null);
ResourceController = __decorate([
    (0, common_1.Controller)('resource'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [resource_service_1.ResourceService])
], ResourceController);
exports.ResourceController = ResourceController;
//# sourceMappingURL=resource.controller.js.map