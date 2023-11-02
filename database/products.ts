import { cache } from 'react';
// import { Product } from '../migrations/1685883592-createTableProducts';
import { sql } from './connect';

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export const getProducts = cache(async () => {
  const product = await sql<Product[]>`
    SELECT * FROM products
 `;
  return product;
});

export const getProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return product;
});
