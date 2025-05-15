"use client";

import { QuantitySelector, SizeSelector } from "@/components";
import { Product } from "@/interfaces";
import { Size } from "prisma/client/client";
import { useState } from "react";

interface Props {
  product: Product;
}

function AddToCart({ product }: Props) {
  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToCart = () => {
    setPosted(true);
    if (!size) return;
    console.log({ size, quantity });
  };

  return (
    <>
      {posted && !size && (
        <span className="mt-2 text-red-500 fade-in">Have to select a size</span>
      )}
      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onSizeChanged={setSize}
      />

      <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />

      {/** Button */}
      <button className="btn-primary my-5" onClick={addToCart}>
        Add to cart
      </button>
    </>
  );
}

export default AddToCart;
