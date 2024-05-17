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
exports.ResourceController = void 0;
const common_1 = require("@nestjs/common");
const resource_service_1 = require("./resource.service");
const create_resource_dto_1 = require("./dto/create-resource.dto");
let ResourceController = class ResourceController {
    constructor(resourceService) {
        this.resourceService = resourceService;
    }
    CreateTask(data) {
        throw new Error('Method not implemented.');
    }
    DeleteTask(id) {
        throw new Error('Method not implemented.');
    }
    findByTitle(title) {
        throw new Error('Method not implemented.');
    }
    findByIsDone(flag) {
        throw new Error('Method not implemented.');
    }
    findByUserId(id) {
        throw new Error('Method not implemented.');
    }
    findById(id) {
        throw new Error('Method not implemented.');
    }
    getAll() {
        throw new Error('Method not implemented.');
    }
    UpdateProperty(id, properties) {
        throw new Error('Method not implemented.');
    }
};
__decorate([
    (0, common_1.Post)('CreateTask'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_resource_dto_1.CreateResourceDto]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "CreateTask", null);
__decorate([
    (0, common_1.Post)('DeleteTask'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "DeleteTask", null);
__decorate([
    (0, common_1.Post)('findByTitle'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "findByTitle", null);
__decorate([
    (0, common_1.Post)('findByIsDone'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "findByIsDone", null);
__decorate([
    (0, common_1.Post)('findByUserId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "findByUserId", null);
__decorate([
    (0, common_1.Post)('findById'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)('getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('UpdateProperty'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "UpdateProperty", null);
ResourceController = __decorate([
    (0, common_1.Controller)('resource'),
    __metadata("design:paramtypes", [resource_service_1.ResourceService])
], ResourceController);
exports.ResourceController = ResourceController;
//# sourceMappingURL=resource.controller.js.map