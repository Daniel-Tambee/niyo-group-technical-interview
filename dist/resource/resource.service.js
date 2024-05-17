"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceService = void 0;
const common_1 = require("@nestjs/common");
let ResourceService = class ResourceService {
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
ResourceService = __decorate([
    (0, common_1.Injectable)()
], ResourceService);
exports.ResourceService = ResourceService;
//# sourceMappingURL=resource.service.js.map