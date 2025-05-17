import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import { redirect } from "next/navigation";
import ProductsInCart from "./ui/ProductsInCart";
import OrderSummary from "./ui/OrderSummary";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

function CartPage() {
  if (productsInCart.length === 0) {
    redirect("/empty");
  }

  return (
    <section className="flex justify-center items-center mb-72 px-10 sm:p-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title="Cart" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/** shopping cart */}
          <div className="flex flex-col mt-5">
            <span>Add Items</span>
            <Link href="/home" className="underline mb-5">
              Continue buying
            </Link>

            <ProductsInCart />
          </div>
          {/** Order summary */}

          <OrderSummary />
        </div>
      </div>
    </section>
  );
}

export default CartPage;
