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
exports.ResourceService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../database/db.service");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let ResourceService = class ResourceService {
    constructor(db, logger) {
        this.db = db;
        this.logger = logger;
    }
    handleConnection(client, ...args) {
        const id = client['id'];
        this.logger.verbose('user connected to socket with an id of ' + id);
    }
    async CreateTask(data) {
        try {
            console.log(data);
            let query = await this.db.task.create({
                data: {
                    title: data['title'],
                    User: {
                        connect: {
                            id: data['userid'],
                        },
                    },
                    is_done: false,
                },
            });
            this.server.emit('taskCreated', query);
            return query;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(undefined, {
                description: error,
            });
        }
    }
    async DeleteTask(id) {
        try {
            let query = await this.db.task.delete({
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
    async findByTitle(title) {
        try {
            let query = await this.db.task.findFirstOrThrow({
                where: {
                    title: title,
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined, {
                description: error,
            });
        }
    }
    async findByIsDone(flag) {
        try {
            let query = await this.db.task.findMany({
                where: {
                    is_done: flag,
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined, {
                description: error,
            });
        }
    }
    async findByUserId(id) {
        try {
            let query = await this.db.task.findMany({
                where: {
                    userId: id,
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined, {
                description: error,
            });
        }
    }
    async findById(id) {
        try {
            let query = await this.db.task.findFirstOrThrow({
                where: {
                    id: id,
                },
            });
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined, {
                description: error,
            });
        }
    }
    async getAll() {
        try {
            let query = await this.db.task.findMany({});
            return query;
        }
        catch (error) {
            throw new common_1.BadRequestException(undefined, {
                description: error,
            });
        }
    }
    async UpdateProperty(id, properties) {
        try {
            let query = await this.db.task.update({
                data: {
                    is_done: Boolean(properties['is_done']),
                    title: properties['title'],
                    userId: properties['userId'],
                },
                where: {
                    id: id,
                },
            });
            return query;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(undefined, {
                description: error,
            });
        }
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ResourceService.prototype, "server", void 0);
ResourceService = __decorate([
    (0, common_1.Injectable)(),
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
        allowEIO3: true,
        allowUpgrades: true,
        serveClient: true,
    }),
    __metadata("design:paramtypes", [db_service_1.DbService,
        common_1.Logger])
], ResourceService);
exports.ResourceService = ResourceService;
//# sourceMappingURL=resource.service.js.map