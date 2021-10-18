import type { NextApiRequest, NextApiResponse } from 'next';
import products from '../../../../data/products.json';
import { ErrorResponse, Product, ProductsResponse } from '../../../types';

type GetPage = (page: number) => Product[];

const getPage: GetPage = (page) => {
  if (page < 1) return [];
  const SIZE = 20;
  const startIndex = page * SIZE - SIZE;
  const endIndex = startIndex + SIZE;
  return products.slice(startIndex, endIndex);
};

const handler = (
  request: NextApiRequest,
  response: NextApiResponse<ProductsResponse | ErrorResponse>,
): void => {
  const { method, query } = request;
  const { status } = response;

  switch (method) {
    case 'GET': {
      const stringifiedPage = Array.isArray(query.page)
        ? query.page.join('')
        : query.page;
      const pageNum = Number(stringifiedPage ?? 1);
      if (isNaN(pageNum) || pageNum < 1) {
        status(400).send('Bad Request');
      } else {
        status(200).json({
          count: 100,
          page: pageNum,
          results: getPage(pageNum),
        });
      }
      break;
    }

    default:
      status(405).send('Method Not Allowed');
      break;
  }
};

export default handler;
