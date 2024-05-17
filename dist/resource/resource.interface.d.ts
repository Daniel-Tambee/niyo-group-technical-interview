import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { Task } from 'prisma/prisma-client';
export interface ITask {
    CreateTask(data: CreateResourceDto): Promise<Task>;
    DeleteTask(id: string): Promise<boolean>;
    findByTitle(title: string): Promise<Task>;
    findByIsDone(flag: boolean): Promise<Task[]>;
    findByUserId(id: string): Promise<Task[]>;
    findById(id: string): Promise<Task>;
    getAll(): Promise<Task[]>;
    UpdateProperty(id: string, properties: UpdateResourceDto): Promise<Task>;
}
