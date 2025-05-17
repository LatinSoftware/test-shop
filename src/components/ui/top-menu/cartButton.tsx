"use client";
import { useCartStore } from "@/store";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

function CartButton() {
  // const [pageLoaded, setPageLoaded] = useState(false);

  const state = useCartStore((state) => state.cart);

  const totalProducts = state.reduce(
    (prev, product) => product.quantity + prev,
    0
  );

  // useEffect(() => {
  //   setPageLoaded(true);
  // }, []);

  return (
    <Link href={`${totalProducts > 0 ? "/cart" : "/empty"}`}>
      <div className="relative">
        {totalProducts > 0 && (
          <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
            {totalProducts}
          </span>
        )}
        <IoCartOutline className="w-5 h-5" />
      </div>
    </Link>
  );
}

export default CartButton;
