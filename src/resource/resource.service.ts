import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { Task } from 'prisma/prisma-client';
import { ITask } from './resource.interface';
import { DbService } from 'src/database/db.service';

@Injectable()
export class ResourceService implements ITask {
  /**
   *
   */
  constructor(private readonly db: DbService) {}
  async CreateTask(data: CreateResourceDto): Promise<Task> {
    try {
      let query = await this.db.task.create({
        data: {
          title: data['title'],
          User: {
            connect: {
              id: data['UserId'],
            },
          },
          is_done: false,
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(undefined, {
        description: error,
      });
    }
  }
  async DeleteTask(id: string): Promise<boolean> {
    try {
      let query = await this.db.task.delete({
        where: {
          id: id,
        },
      });
      return true;
    } catch (error) {
      throw new BadRequestException(undefined, {
        description: error,
      });
    }
  }
  async findByTitle(title: string): Promise<Task> {
    try {
      let query = await this.db.task.findFirstOrThrow({
        where: {
          title: title,
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(undefined, {
        description: error,
      });
    }
  }
  async findByIsDone(flag: boolean): Promise<Task[]> {
    try {
      let query = await this.db.task.findMany({
        where: {
          is_done: flag,
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(undefined, {
        description: error,
      });
    }
  }
  async findByUserId(id: string): Promise<Task[]> {
    try {
      let query = await this.db.task.findMany({
        where: {
          userId: id,
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(undefined, {
        description: error,
      });
    }
  }
  async findById(id: string): Promise<Task> {
    try {
      let query = await this.db.task.findFirstOrThrow({
        where: {
          id: id,
        },
      });
      return query;
    } catch (error) {
      throw new BadRequestException(undefined, {
        description: error,
      });
    }
  }
  async getAll(): Promise<Task[]> {
    try {
      let query = await this.db.task.findMany({});
      return query;
    } catch (error) {
      throw new BadRequestException(undefined, {
        description: error,
      });
    }
  }
  async UpdateProperty(
    id: string,
    properties: UpdateResourceDto,
  ): Promise<Task> {
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
    } catch (error) {
      console.log(error);

      throw new BadRequestException(undefined, {
        description: error,
      });
    }
  }
}
