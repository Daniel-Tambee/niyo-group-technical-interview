import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'prisma/prisma-client';
/**
 * this class extends the prisma client and grants a connection to the database
 */
@Injectable()
export class DbService extends PrismaClient {
  /**
   *
   */
  constructor() {
    super({
      errorFormat: 'pretty',
    });
    try {
    } catch (error) {}
  }
}
