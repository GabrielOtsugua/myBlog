"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Smartphone } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ContactUs() {
  const router = useRouter();

  const handleClick = () => {
    window.open(
      "https://cadenaimoveis.com.br/contato/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="grid grid-cols-2 gap-8 mt-16">
      <aside>
        <div className="bg-black h-96 rounded"></div>
      </aside>

      <main className="flex flex-col gap-4">
        <h1 className="text-lg font-semibold">Fale conosco</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur,
          vel iusto libero necessitatibus repudiandae officia dolorem.
        </p>

        <div className="flex gap-12">
          <div className="flex items-center gap-2">
            <Smartphone />
            <span>
              <p className="font-semibold">Ligue direto</p>
              <p>(41) 3121-3565</p>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle />
            <span>
              <p className="font-semibold">Vendas</p>
              <p>(41) 99879-1047</p>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle />
            <span>
              <p className="font-semibold">Locação</p>
              <p>(41) 99699-0773</p>
            </span>
          </div>
        </div>

        <a
          href="https://cadenaimoveis.com.br/contato/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant={"link"}>Clique aqui para mais detalhes.</Button>
        </a>
      </main>
    </div>
  );
}
