import { useState } from "react";
import Layout from "../components/Layout";
import CartPage from "./cart";
import ProductPage1 from "./products/ProductPage1";
import ProductPage2 from "./products/ProductPage2";
import ProductPage3 from "./products/ProductPage3";
import ProductPage4 from "./products/ProductPage4";
import ProductPage5 from "./products/ProductPage5";

const HomePage = () => {
  const [buttonChange, setButtonChange] = useState("1");

  return (
    <Layout>
      <h1 className="text-center text-xl mt-5 text-blue-800 text-opacity-90 ">
        Products
      </h1>
      {buttonChange === "1" ? <ProductPage1 /> : null}
      {buttonChange === "2" ? <ProductPage2 /> : null}
      {buttonChange === "3" ? <ProductPage3 /> : null}
      {buttonChange === "4" ? <ProductPage4 /> : null}
      {buttonChange === "5" ? <ProductPage5 /> : null}

      <div className="text-center m-10">
        <button
          className="border-4 m-2 border-blue-700 border-opacity-70 p-1"
          onClick={() => {
            setButtonChange("1");
          }}
        >
          1
        </button>
        <button
          className="border-4 m-2 border-blue-700 border-opacity-70 p-1"
          onClick={() => {
            setButtonChange("2");
          }}
        >
          2
        </button>
        <button
          className="border-4 m-2 border-blue-700 border-opacity-70 p-1"
          onClick={() => {
            setButtonChange("3");
          }}
        >
          3
        </button>
        <button
          className="border-4 m-2 border-blue-700 border-opacity-70 p-1"
          onClick={() => {
            setButtonChange("4");
          }}
        >
          4
        </button>
        <button
          className="border-4 m-2 border-blue-700 border-opacity-70 p-1"
          onClick={() => {
            setButtonChange("5");
          }}
        >
          5
        </button>
      </div>
    </Layout>
  );
};

export default HomePage;
