"use client";

import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import Image from "next/image";
import Link from "next/link";

function ProductsInCart() {
  const productsInCart = useCartStore((state) => state.cart);
  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );

  const removeProduct = useCartStore(state => state.removeProduct)

  return (
    <>
      {productsInCart.map((product) => (
        <div key={`${product.slug}-${product.size}`} className="flex mb-5">
          <Image
            src={`/products/${product.image}`}
            alt={product.title}
            width={100}
            height={100}
            className="object-cover mr-5 rounded"
            style={{
              width: "100px",
              height: "100px",
            }}
          />

          <div>
            <Link
              href={`/product/${product.slug}`}
              className="hover:underline cursor-pointer"
            >
              <p>
                {" "}
                {product.size} - {product.title}
              </p>
            </Link>
            <p>${product.price}</p>
            <QuantitySelector
              quantity={product.quantity}
              onQuantityChange={(value) =>
                updateProductQuantity(product, value)
              }
            />
            <button className="underline" onClick={() => removeProduct(product)}>Remove</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductsInCart;
