import { useState } from "react";
import Layout from "../../components/Layout";
import useStore from "../../store";
import { CartProduct, Product } from "../../types";

const CartPage = () => {
  const cartItems = useStore((store) => store.cartItems);
  const addProductToCart = useStore((store) => store.addProductToCart);
  const onRemoveFromCart = useStore((store) => store.onRemoveFromCart);

  const itemsPrice = cartItems.reduce(
    (a: number, c: CartProduct) => a + c.recommendedRetailPrice * c.quantity,
    0
  );
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 200 ? 0 : 10;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <>
      <Layout>
        <h1 className="text-center text-xl mt-5 text-blue-800 text-opacity-90 ">
          Your Cart
        </h1>
        <div>
          {cartItems.length === 0 && (
            <div className="text-center m-24 text-2xl text-blue-900 text-opacity-100">
              Cart is empty
            </div>
          )}
        </div>
        {cartItems.map((product: CartProduct) => (
          <div
            key={product.gtin}
            className="flex justify-between mt-10 border-4"
          >
            <div>
              <img className="h-24" src={product.imageUrl} alt="" />
            </div>
            <div className="mt-8">{product.name}</div>
            <div>
              <button
                onClick={() => {
                  onRemoveFromCart(product);
                }}
                className="mt-8 border-4"
              >
                -
              </button>
              <button
                onClick={() => {
                  addProductToCart(product);
                }}
                className="mt-8 ml-2 border-4"
              >
                +
              </button>
            </div>
            <div className="mt-8 text-right">
              {product.quantity} x {product.recommendedRetailPrice}
              {product.recommendedRetailPriceCurrency}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className=" mt-4 mb-2 grid justify-items-end">
              Items Price: {itemsPrice.toFixed(2)} EUR
            </div>

            <div className=" mb-2 grid justify-items-end">
              Tax Price: {taxPrice.toFixed(2)} EUR
            </div>

            <div className="mb-2 grid justify-items-end">
              Shipping Price: {shippingPrice.toFixed(2)} EUR
            </div>

            <div className="mb-2 grid justify-items-end">
              <strong>Total Price: {totalPrice.toFixed(2)} EUR</strong>
            </div>
          </>
        )}
        <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-blue-600 bg-opacity-50 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
          <svg
            aria-hidden="true"
            data-prefix="far"
            data-icon="credit-card"
            className="w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
            />
          </svg>
          <span className="ml-2 mt-5px">Procceed to checkout</span>
        </button>
      </Layout>
    </>
  );
};

export default CartPage;
