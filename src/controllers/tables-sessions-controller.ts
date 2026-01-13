import { Request, Response, NextFunction } from 'express';
import { AppError } from '@/utils/AppError';
import z from 'zod';
import { knex } from '../database/knex';

class TablesSessionsController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        table_id: z.number(),
      });

      const { table_id } = bodySchema.parse(req.body);

      const session = await knex<TableSessionsRepository>('table_sessions')
        .where({ table_id })
        .orderBy('opened_at', 'desc')
        .first();

      if (session && !session.closed_at) {
        throw new AppError('This table is already in use.');
      }

      await knex<TableSessionsRepository>('table_sessions').insert({
        table_id,
        opened_at: knex.fn.now(),
      });

      return res.status(201).json();
    } catch (error) {
      next(error);
    }
  }
}

export { TablesSessionsController };
