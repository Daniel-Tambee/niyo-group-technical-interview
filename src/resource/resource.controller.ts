import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResourceService } from './resource.service';
import { CreateResourceDto } from './dto/create-resource.dto';
import { ITask } from './resource.interface';
import { Task } from 'prisma/prisma-client';

@Controller('resource')
export class ResourceController implements ITask {
  constructor(private readonly resourceService: ResourceService) {}
  @Post('CreateTask')
  CreateTask(data: CreateResourceDto): Promise<Task> {
    throw new Error('Method not implemented.');
  }
  @Post('DeleteTask')
  DeleteTask(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  @Post('findByTitle')
  findByTitle(title: string): Promise<Task> {
    throw new Error('Method not implemented.');
  }
  @Post('findByIsDone')
  findByIsDone(flag: boolean): Promise<Task[]> {
    throw new Error('Method not implemented.');
  }
  @Post('findByUserId')
  findByUserId(id: string): Promise<Task[]> {
    throw new Error('Method not implemented.');
  }
  @Post('findById')
  findById(id: string): Promise<Task> {
    throw new Error('Method not implemented.');
  }
  @Post('getAll')
  getAll(): Promise<Task[]> {
    throw new Error('Method not implemented.');
  }
  @Post('UpdateProperty')
  UpdateProperty(id: string, properties: Partial<Task>): Promise<Task> {
    throw new Error('Method not implemented.');
  }
}
