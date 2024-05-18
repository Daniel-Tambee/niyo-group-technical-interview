import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Logger,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './user.interface';
import { User } from 'prisma/prisma-client';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/gaurds/auth.guard';

@Controller('user')
@ApiTags('User')
@UseGuards(AuthGuard)
export class UserController implements IUser {
  constructor(
    private readonly userService: UserService,
    private readonly logger: Logger,
  ) {}
  @Get('findByFirstName')
  findByFirstName(@Query('firstName') firstName: string): Promise<User> {
    return this.userService.findByFirstName(firstName);
  }
  @Get('findByLastName')
  findByLastName(@Query('lastName') lastName: string): Promise<User> {
    return this.userService.findByLastName(lastName);
  }
  @Post('findByUserId')
  findByUserId(@Query('id') id: string): Promise<User> {
    return this.userService.findByUserId(id);
  }
  findByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  @Get('getAllUsers')
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
  @Post('UpdateProperties')
  UpdateProperty(
    @Query('id') id: string,
    @Body() properties: {},
  ): Promise<User> {
    return this.userService.UpdateProperty(id, properties);
  }
  CreateUser(@Body() data: CreateUserDto) {
    return this.userService.CreateUser(data);
  }
  @Delete(':id')
  DeleteUser(@Param('id') id: string) {
    return this.userService.DeleteUser(id);
  }
}
