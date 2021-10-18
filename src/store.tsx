import create from "zustand";
import { CartProduct, Product, ProductsResponse } from "./types";

type StoreType = {
  products: ProductsResponse | null;
  setProducts1: () => void;
  setProducts2: () => void;
  setProducts3: () => void;
  setProducts4: () => void;
  setProducts5: () => void;
  cartItems: CartProduct[] | [];
  setCartItems: (item: any) => void;
  addProductToCart: (item: CartProduct) => void;
  onRemoveFromCart: (item: CartProduct) => void;
};

const useStore = create<StoreType>((set, get) => ({
  products: null,
  setProducts1: async () => {
    const productsFromServer1 = await fetch(
      `http://localhost:3000/api/products`
    ).then((res) => res.json());
    console.log("hey", productsFromServer1);
    set({ products: productsFromServer1 });
  },

  setProducts2: async () => {
    const productsFromServer2 = await fetch(
      `http://localhost:3000/api/products?page=2`
    ).then((res) => res.json());
    set({ products: productsFromServer2 });
  },

  setProducts3: async () => {
    const productsFromServer3 = await fetch(
      `http://localhost:3000/api/products?page=3`
    ).then((res) => res.json());
    set({ products: productsFromServer3 });
  },

  setProducts4: async () => {
    const productsFromServer4 = await fetch(
      `http://localhost:3000/api/products?page=4`
    ).then((res) => res.json());
    set({ products: productsFromServer4 });
  },

  setProducts5: async () => {
    const productsFromServer5 = await fetch(
      `http://localhost:3000/api/products?page=5`
    ).then((res) => res.json());
    set({ products: productsFromServer5 });
  },
  cartItems: [],
  setCartItems: (item) => set({ cartItems: item }),
  addProductToCart: (item) => {
    const exist = get().cartItems?.find((x) => x.gtin === item.gtin);
    if (exist) {
      get().setCartItems(
        get().cartItems.map((x: any) =>
          x.gtin === item.gtin ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      get().setCartItems([...get().cartItems, { ...item, quantity: 1 }]);
    }
  },

  onRemoveFromCart: (item) => {
    const exist = get().cartItems?.find((x) => x.gtin === item.gtin);
    if (exist?.quantity === 1) {
      get().setCartItems(
        get().cartItems.filter((x: any) => x.gtin !== item.gtin)
      );
    } else {
      get().setCartItems(
        get().cartItems.map((x: any) =>
          x.gtin === item.gtin ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  },
}));

export default useStore;
