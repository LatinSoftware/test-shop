import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

function EmptyPage() {
  return (
    <section className="flex justify-center items-center h-[50vh]">
      <IoCartOutline size={80} className="mx-5" />
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold">Your cart is empty</h1>

        <Link href="/" className="text-blue-500 mt-2 text-4xl">
          Return to shop
        </Link>
      </div>
    </section>
  );
}

export default EmptyPage;
