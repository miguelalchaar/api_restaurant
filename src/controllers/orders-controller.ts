import { Request, Response, NextFunction } from 'express';
import { AppError } from '@/utils/AppError';
import { knex } from '../database/knex';
import { z } from 'zod';

class OrdersController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        table_session_id: z.number(),
        product_id: z.number(),
        quantity: z.number(),
      });

      const { table_session_id, product_id, quantity } = bodySchema.parse(
        req.body,
      );

      const session = await knex<TableSessionsRepository>('table_sessions')
        .where({ id: table_session_id })
        .first();

      if (!session) {
        throw new AppError('Table session not found', 404);
      }

      if (session.closed_at) {
        throw new AppError('Table session is already closed', 400);
      }

      const product = await knex<ProductRepository>('products')
        .where({ id: product_id })
        .first();

      if (!product) {
        throw new AppError('Product not found', 404);
      }

      await knex<OrderRepository>('orders').insert({
        table_session_id,
        product_id,
        quantity,
        price: product.price,
      });

      return res.status(201).json();
    } catch (error) {
      next(error);
    }
  }

  async index(req: Request, res: Response, next: NextFunction)  {
    try {
      return res.json()
    } catch (error) {
      next(error);
    }
  }
}



export { OrdersController };
