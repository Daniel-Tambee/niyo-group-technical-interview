import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { Task } from 'prisma/prisma-client';

export interface ITask {
  /**
   * a Function that creates Tasks based on the id given
   *
   */
  CreateTask(data: CreateResourceDto): Promise<Task>;
  /**
   * A Function that deletes a task based on the id given
   * @param id
   * @returns {Boolean}
   */
  DeleteTask(id: string): Promise<boolean>;
  /**
   * a function that fetches tasks from the database based on the title given
   * @param title
   */
  findByTitle(title: string): Promise<Task>;
  /**
   * a function that fetches a list of tasks from the database based on the flag passed given
   * @param flag
   */
  findByIsDone(flag: boolean): Promise<Task[]>;
  /**
   * a function that fetches  a list the tasks created by the user given a user id passed in
   * @param id
   */
  findByUserId(id: string): Promise<Task[]>;
  /**
   *a function that fetches  a task given the id is given
   * @param id
   */
  findById(id: string): Promise<Task>;
  /**
   * fetches all tasks in the database
   */
  getAll(): Promise<Task[]>;
  /**
   * a function to update fields on the task given the id is passed in
   * @param id
   * @param properties
   */
  UpdateProperty(id: string, properties: UpdateResourceDto): Promise<Task>;
}
