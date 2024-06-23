"use client";

import { Button } from "@/components/ui/button";
import { BadgeCheck, Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="pb-8">
      <div className="w-full h-[700px] bg-black flex items-end p-8 rounded">
        <div className="text-white w-1/2 flex flex-col gap-4">
          <p className="font-semibold text-lg">Lorem ipsum.</p>
          <p className="font-bold text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            voluptates consequatur sit vel eius temporibus fugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad quae
            dolor ipsum consequuntur optio quo earum rem sit sunt, explicabo
            labore amet vel neque. Cupiditate eveniet adipisci quis atque
            molestiae?
          </p>
        </div>
      </div>

      <h2 className="text-xl mt-16 mb-8 font-semibold">Destaques</h2>

      <ul className="grid grid-cols-3 gap-8">
        <li className="flex flex-col gap-2 rounded">
          <div className="bg-gray-200 h-56 w-full rounded"></div>
          <p className="font-semibold text-lg">Lorem Ipsum</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum
            repudiandae vero perferendis natus, eius.
          </p>
          <p className="font-semibold flex items-center textsm gap-2">
            <Check size={16} /> Lorem ipsum dolor sit amet consectetur.
          </p>
        </li>
        <li className="flex flex-col gap-2 rounded">
          <div className="bg-gray-200 h-56 w-full rounded"></div>
          <p className="font-semibold text-lg">Lorem Ipsum</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolorum
            repudiandae vero perferendis natus, eius.
          </p>
          <p className="font-semibold flex items-center textsm gap-2">
            <Check size={16} /> Lorem ipsum dolor sit amet consectetur.
          </p>
        </li>
      </ul>

      <footer className="w-full flex flex-col items-center gap-8 bg-black rounded mt-16 p-8 text-white">
        <span className="text-center">
          <p className="text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </span>

        <span className="flex gap-4 mb-8">
          <Button
            onClick={() => router.push("/contactUs")}
            variant={"secondary"}
          >
            Fale conosco
          </Button>
          <Button onClick={() => router.push("/history")} variant={"secondary"}>
            Comece por aqui
          </Button>
        </span>

        <div className="flex justify-between w-full">
          <BadgeCheck size={20} />
          <p className="text-sm">
            &copy; Vivenda Cadena - 2024 - Direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
