import { useEffect } from "react";
import useStore from "../../store";
import { Product } from "../../types";

const ProductPage5 = () => {
  const products = useStore((store) => store.products);
  const setProducts5 = useStore((store) => store.setProducts5);
  const addProductToCart = useStore((store) => store.addProductToCart);

  console.log("products", products);

  const handleClick = (product: Product) => {
    const productToADD = {
      name: product.name,
      gtin: product.gtin,
      imageUrl: product.imageUrl,
      recommendedRetailPrice: product.recommendedRetailPrice,
      recommendedRetailPriceCurrency: product.recommendedRetailPriceCurrency,
      quantity: 0,
      brandName: product.brandName,
      categoryName: product.categoryName,
    };
    addProductToCart(productToADD);
  };

  useEffect(() => {
    setProducts5();
  }, [setProducts5]);

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-3">
      {products?.results.map((product) => (
        <li
          className="border-solid border-4 p-10 list-none bg-blue-700 bg-opacity-30"
          key={product.gtin}
        >
          <img src={product.imageUrl} alt="Product-Image"></img>
          <div className="text-white block mx-auto text-center p-3">
            <p>{product.name}</p>
            <p>
              {product.recommendedRetailPrice}
              {product.recommendedRetailPriceCurrency}
            </p>
            <p>{product.categoryName}</p>
          </div>
          <button
            className=" text-white bg-blue-700 bg-opacity-70 block uppercase mx-auto shadow hover:bg-blue-500 "
            onClick={() => handleClick(product)}
          >
            Add to Cart
          </button>
        </li>
      ))}
    </div>
  );
};

export default ProductPage5;
