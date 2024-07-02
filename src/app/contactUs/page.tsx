"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Smartphone } from "lucide-react";
import Image from "next/image";
import contactUs from "@/assets/contactUs.jpg";
import Footer from "@/components/Footer";

export default function ContactUs() {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8">
        <aside className="min-h-[350px]">
          <Image
            src={contactUs}
            alt=""
            className="rounded object-cover h-full"
          />
        </aside>

        <main className="flex flex-col items-start gap-4">
          <h1 className="text-lg font-semibold">Fale conosco</h1>
          <p>
            Aqui estão alguns contatos rápidos. Caso tenha interesse em outros
            canais que a Cadena utiliza, clique em 'Todos os contatos'.
          </p>

          <div className="flex flex-wrap lg:flex-nowrap gap-8">
            <div className="flex items-center gap-2">
              <Smartphone className="text-primary" />
              <span>
                <p className="font-semibold">Ligue direto</p>
                <p className="text-sm">(41) 3121-3565</p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="text-primary" />
              <span>
                <p className="font-semibold">Vendas</p>
                <p className="text-sm">(41) 99879-1047</p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="text-primary" />
              <span>
                <p className="font-semibold">Locação</p>
                <p className="text-sm">(41) 99699-0773</p>
              </span>
            </div>
          </div>

          <a
            href="https://cadenaimoveis.com.br/contato/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant={"link"}>Todos os contatos</Button>
          </a>
        </main>
      </div>

      <Footer />
    </div>
  );
}
