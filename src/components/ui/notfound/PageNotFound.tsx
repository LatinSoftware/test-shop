import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";

function PageNotFound() {
  return (
    <section className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="flex flex-col items-center justify-center">
        <h1 className={`${titleFont.className} antialiased text-9xl`}>404</h1>
        <p className="mt-4 p-4hi v text-xl font-semibold">
          The category you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
        >
          Go to home
        </Link>
      </div>
      <Image
        src="/imgs/starman_750x750.png"
        alt="Starman"
        width={550}
        height={550}
      />
    </section>
  );
}

export { PageNotFound };
