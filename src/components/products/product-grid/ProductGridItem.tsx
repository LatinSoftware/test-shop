"use client";
import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  product: Product;
}

export function ProductGridItem({ product }: Props) {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  return (
    <div className="bg-white shadow-md rounded-md fade-in p-4">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${displayImage}`}
          width={500}
          height={500}
          alt={product.title}
          className="w-full object-cover rounded"
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
        />
      </Link>
      <div className="p-4 flex flex-col">
        <Link href={`/product/${product.slug}`} className="hover:text-blue-600">
          {product.title}
        </Link>
        <span className="font-bold">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
}
