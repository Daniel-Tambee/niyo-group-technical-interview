import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseBoolPipe,
  UseGuards,
} from '@nestjs/common';
import { ResourceService } from './resource.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { CreateResourceDto } from './dto/create-resource.dto';
import { ITask } from './resource.interface';
import { Task } from 'prisma/prisma-client';
import { AuthGuard } from 'src/auth/gaurds/auth.guard';

@Controller('resource')
@ApiTags('Resource(Todo)')
@UseGuards(AuthGuard)
@ApiBearerAuth('authorization')
export class ResourceController implements ITask {
  constructor(private readonly resourceService: ResourceService) {}
  @Post('CreateTask')
  CreateTask(@Body() data: CreateResourceDto): Promise<Task> {
    return this.resourceService.CreateTask(data);
  }
  @Delete(':id')
  DeleteTask(@Param('id') id: string): Promise<boolean> {
    return this.resourceService.DeleteTask(id);
  }
  @Post('findByTitle')
  findByTitle(@Query('title') title: string): Promise<Task> {
    return this.resourceService.findByTitle(title);
  }
  @Post('findByIsDone')
  findByIsDone(@Query('flag', ParseBoolPipe) flag: boolean): Promise<Task[]> {
    return this.resourceService.findByIsDone(flag);
  }
  @Post('findByUserId')
  findByUserId(@Query('id') id: string): Promise<Task[]> {
    return this.resourceService.findByUserId(id);
  }
  @Post('findById')
  findById(@Query('id') id: string): Promise<Task> {
    return this.resourceService.findById(id);
  }
  @Get('getAll')
  getAll(): Promise<Task[]> {
    return this.resourceService.getAll();
  }
  @Patch('UpdateProperty')
  UpdateProperty(
    @Query('id') id: string,
    @Body() properties: Partial<Task>,
  ): Promise<Task> {
    return this.resourceService.UpdateProperty(id, properties);
  }
}
