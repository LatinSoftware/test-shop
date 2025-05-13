import { titleFont } from "@/config/fonts";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex w-full justify-center text-xs my-5">
      <Link href="/">
        <span className={`${titleFont.className} antialiased font-bold`}>
          Teslo
        </span>
        <span> | shop</span>
        <span> © {new Date().getFullYear()}</span>
      </Link>
      <Link href="/privacy-policy" className="ml-2">
        <span>
          Privacy Policy & Terms of Service
        </span>
      </Link>
    </footer>
  );
}

export { Footer };
