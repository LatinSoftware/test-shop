import { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  getSummaryInformation: () => {
    subTotal: number;
    tax: number;
    total: number;
    itemsInCart: number;
  };
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  removeProduct: (product: CartProduct) => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],

      getSummaryInformation() {
        const { cart } = get();

        const subTotal = cart.reduce(
          (subTotal, product) => product.quantity * product.price + subTotal,
          0
        );

        const tax = subTotal * 0.15;
        const total = subTotal + tax;
        const itemsInCart = cart.reduce(
          (prev, product) => product.quantity + prev,
          0
        );

        return {
          subTotal,
          tax,
          total,
          itemsInCart,
        };
      },

      addProductToCart(product) {
        const { cart } = get();

        // Check if the product already exists in the cart
        const existingProductInCart = cart.some(
          (p) => p.id === product.id && p.size === product.size
        );

        if (!existingProductInCart) {
          set({
            cart: [...cart, product],
          });

          return;
        }

        // If the product already exist, update the quantity
        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            };
          }

          return item;
        });

        set({
          cart: updatedCartProducts,
        });
      },

      updateProductQuantity({ id, size }: CartProduct, quantity: number) {
        const { cart } = get();

        const productIndex = cart.findIndex(
          (p) => p.id === id && p.size === size
        );
        if (productIndex < 0) return;

        const existingProduct = cart[productIndex];

        const newCart = [...cart];

        newCart[productIndex] = {
          ...existingProduct,
          quantity: quantity,
        };

        set({ cart: newCart });
      },

      removeProduct({ id, size }) {
        const { cart } = get();

        const newProducts = cart.filter(
          (item) => item.id !== id || item.size !== size
        );

        set({
          cart: newProducts,
        });
      },
    }),
    {
      name: "shopping-cart",
    }
  )
);
