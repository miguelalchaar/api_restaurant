import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('products').del();

  await knex('products').insert([
    { name: 'Nhoque quatro queijos', price: 35 },
    { name: 'Isca de frango', price: 60 },
    { name: 'Tilápia com alcaparras', price: 100 },
    { name: 'Bolinho de mandioca', price: 75 },
    { name: 'Escondidinho de carne de sol', price: 65 },
    { name: 'Risoto de camarão', price: 39 },
    { name: 'Caldo de frango', price: 30 },
    { name: 'Porção de fritas com cheddar', price: 40 },
    { name: 'Refrigerante 350ml', price: 7.5 },
    { name: 'Suco de laranja 440ml', price: 10 },
    { name: 'MilkShake de nutella', price: 14 },
  ]);
}
