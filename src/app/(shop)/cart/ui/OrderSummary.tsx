"use client";

import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

function OrderSummary() {
  const summaryInformation = useCartStore(
    (state) => state.getSummaryInformation
  );

  const { itemsInCart, subTotal, tax, total } = summaryInformation();

  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  if (!pageLoaded) return <span>loading...</span>;

  return (
    <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
      <h2 className="text-2xl mb-2">Order summary</h2>
      <div className="grid grid-cols-2">
        <span>Products</span>
        <span className="text-right">
          {itemsInCart === 1 ? "1 item" : `${itemsInCart} items`}
        </span>

        <span>SubTotal</span>
        <span className="text-right">{currencyFormat(subTotal)}</span>

        <span>Taxes (15%)</span>
        <span className="text-right">{currencyFormat(tax)} </span>

        <span className="mt-5 text-2xl">Total:</span>
        <span className="mt-5 text-right text-2xl">
          {currencyFormat(total)}
        </span>
      </div>
      <div className="mt-5 mb-2 w-full">
        <Link
          href="/checkout/address"
          className="flex btn-primary justify-center"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default OrderSummary;
