import type { NextApiRequest, NextApiResponse } from 'next';
import products from '../../../../../data/products.json';
import { ErrorResponse, Product, ProductResponse } from '../../../../types';

type GetProduct = (gtin: string) => Product | undefined;

const getProduct: GetProduct = (gtin) => {
  return products.find((product) => product.gtin === gtin);
};

const handler = (
  request: NextApiRequest,
  response: NextApiResponse<ProductResponse | ErrorResponse>,
): void => {
  const { method, query } = request;
  const { status } = response;

  switch (method) {
    case 'GET': {
      const stringifiedGtinQuery = Array.isArray(query.gtin)
        ? query.gtin.join('')
        : query.gtin;
      const product = getProduct(stringifiedGtinQuery);
      if (product) {
        status(200).json(product);
      } else {
        status(404).send('Not Found');
      }
      break;
    }

    default:
      status(405).send('Method Not Allowed');
      break;
  }
};

export default handler;
