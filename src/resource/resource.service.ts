import { Injectable } from '@nestjs/common';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { Task } from 'prisma/prisma-client';
import { ITask } from './resource.interface';

@Injectable()
export class ResourceService implements ITask {
  CreateTask(data: CreateResourceDto): Promise<Task> {
    throw new Error('Method not implemented.');
  }
  DeleteTask(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  findByTitle(title: string): Promise<Task> {
    throw new Error('Method not implemented.');
  }
  findByIsDone(flag: boolean): Promise<Task[]> {
    throw new Error('Method not implemented.');
  }
  findByUserId(id: string): Promise<Task[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<Task> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<Task[]> {
    throw new Error('Method not implemented.');
  }
  UpdateProperty(id: string, properties: UpdateResourceDto): Promise<Task> {
    throw new Error('Method not implemented.');
  }
}
