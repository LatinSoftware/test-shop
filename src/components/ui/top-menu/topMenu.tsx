import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import MenuButton from "./menuButton";
import CartButton from "./cartButton";

function TopMenu() {
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo | Shop
          </span>
        </Link>
      </div>
      <div className="hidden sm:block">
        <Link
          href="/gender/men"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Men
        </Link>
        <Link
          href="/gender/women"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Women
        </Link>
        <Link
          href="/gender/kids"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Kids
        </Link>
      </div>
      {/* SEARCH, CART, MENU */}
      <div className="flex items-center gap-2">
        <Link href="/search">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <CartButton />

        <MenuButton />
      </div>
    </nav>
  );
}

export { TopMenu };
