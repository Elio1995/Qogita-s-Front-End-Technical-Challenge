export type Product = {
  name: string;
  gtin?: string;
  recommendedRetailPrice: number;
  recommendedRetailPriceCurrency: string;
  imageUrl: string;
  brandName: string;
  categoryName: string;
};

export type CartProduct = {
  name: string;
  gtin?: string;
  recommendedRetailPrice: number;
  recommendedRetailPriceCurrency: string;
  imageUrl: string;
  quantity: number;
  brandName: string;
  categoryName: string;
};

/**
 * The response type of errors from /api/*.
 */
export type ErrorResponse = string;

/**
 * The response type of /api/products
 */
export type ProductsResponse = {
  count: number;
  page: number;
  results: Product[];
};

/**
 * The response type of /api/products/[gtin].
 */
export type ProductResponse = Product;
