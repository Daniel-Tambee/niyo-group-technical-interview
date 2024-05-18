import { Logger } from '@nestjs/common';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { Task } from 'prisma/prisma-client';
import { ITask } from './resource.interface';
import { DbService } from 'src/database/db.service';
import { OnGatewayConnection } from '@nestjs/websockets';
import { Server } from 'socket.io';
export declare class ResourceService implements ITask, OnGatewayConnection {
    private readonly db;
    private readonly logger;
    server: Server;
    constructor(db: DbService, logger: Logger);
    handleConnection(client: any, ...args: any[]): void;
    CreateTask(data: CreateResourceDto): Promise<Task>;
    DeleteTask(id: string): Promise<boolean>;
    findByTitle(title: string): Promise<Task>;
    findByIsDone(flag: boolean): Promise<Task[]>;
    findByUserId(id: string): Promise<Task[]>;
    findById(id: string): Promise<Task>;
    getAll(): Promise<Task[]>;
    UpdateProperty(id: string, properties: UpdateResourceDto): Promise<Task>;
}
