import { ResourceService } from './resource.service';
import { CreateResourceDto } from './dto/create-resource.dto';
import { ITask } from './resource.interface';
import { Task } from 'prisma/prisma-client';
export declare class ResourceController implements ITask {
    private readonly resourceService;
    constructor(resourceService: ResourceService);
    CreateTask(data: CreateResourceDto): Promise<Task>;
    DeleteTask(id: string): Promise<boolean>;
    findByTitle(title: string): Promise<Task>;
    findByIsDone(flag: boolean): Promise<Task[]>;
    findByUserId(id: string): Promise<Task[]>;
    findById(id: string): Promise<Task>;
    getAll(): Promise<Task[]>;
    UpdateProperty(id: string, properties: Partial<Task>): Promise<Task>;
}
