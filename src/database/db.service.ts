import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'prisma/prisma-client';

@Injectable()
export class DbService extends PrismaClient {
  /**
   *
   */
  constructor() {
    super({
      errorFormat: 'pretty',
    });
  }
}
