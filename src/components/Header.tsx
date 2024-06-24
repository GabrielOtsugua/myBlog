"use client";

import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-background/85 backdrop-blur-sm sticky items-center top-0 z-10 mb-8 py-4">
      <h1 className="absolute top-4 bottom-4 left-0 hidden lg:flex items-center gap-1 text-lg font-medium">
        <BadgeCheck className="text-primary" /> Vivenda Cadena
      </h1>

      <h1 className="flex items-center lg:hidden gap-1 mb-2 text-sm md:text-base">
        <BadgeCheck className="text-primary w-5 md:w-auto" /> Vivenda Cadena
      </h1>

      <nav className="flex justify-center items-center gap-3 md:gap-4 text-xs md:text-base">
        <Link
          data-pathname={pathname === "/"}
          href={"/"}
          className="data-[pathname=true]:border-b data-[pathname=true]:border-primary transition duration-500"
        >
          Home
        </Link>
        <Link
          data-pathname={pathname === "/history"}
          href={"/history"}
          className="data-[pathname=true]:border-b data-[pathname=true]:border-primary transition duration-500"
        >
          Nossa história
        </Link>
        <Link
          data-pathname={pathname === "/comunication"}
          href={"/comunication"}
          className="data-[pathname=true]:border-b data-[pathname=true]:border-primary transition duration-500"
        >
          Nossa comunicação
        </Link>
        <Link
          data-pathname={pathname === "/contactUs"}
          href={"/contactUs"}
          className="data-[pathname=true]:border-b data-[pathname=true]:border-primary transition duration-500"
        >
          Fale conosco
        </Link>
      </nav>
    </header>
  );
}
