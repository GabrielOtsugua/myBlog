"use client";

import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-background fixed top-0 w-[70%] m-auto z-10">
      <h1 className="absolute top-4 left-0 flex items-center gap-1 text-lg font-medium">
        <BadgeCheck /> Vivenda Cadena
      </h1>

      <nav className="p-4 flex justify-center items-center gap-4">
        <Link
          data-pathname={pathname === "/"}
          href={"/"}
          className="data-[pathname=true]:border-b data-[pathname=true]:border-foreground transition duration-500"
        >
          Home
        </Link>
        <Link
          data-pathname={pathname === "/history"}
          href={"/history"}
          className="data-[pathname=true]:border-b data-[pathname=true]:border-foreground transition duration-500"
        >
          Nossa história
        </Link>
        <Link
          data-pathname={pathname === "/portfolio"}
          href={"/portfolio"}
          className="data-[pathname=true]:border-b data-[pathname=true]:border-foreground transition duration-500"
        >
          Portfólio
        </Link>
        <Link
          data-pathname={pathname === "/comunication"}
          href={"/comunication"}
          className="data-[pathname=true]:border-b data-[pathname=true]:border-foreground transition duration-500"
        >
          Nossa comunicação
        </Link>
        <Link
          data-pathname={pathname === "/contactUs"}
          href={"/contactUs"}
          className="data-[pathname=true]:border-b data-[pathname=true]:border-foreground transition duration-500"
        >
          Fale conosco
        </Link>
      </nav>
    </header>
  );
}
