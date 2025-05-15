import { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
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
    }),
    {
      name: "shopping-cart",
    }
  )
);
