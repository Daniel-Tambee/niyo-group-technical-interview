import { Task } from 'prisma/prisma-client';
import { Excluded } from 'src/utils/exclude_properties';

export type UpdateResourceDto = Partial<Task>;
