import { BadgeCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function Footer() {
  return (
    <Card className="w-full flex flex-col items-center gap-8 rounded mt-16 p-4 md:p-8 bg-muted">
      <span className="text-center">
        <p className="md:text-lg font-semibold">
          Deseja obter mais informações sobre a empresa?
        </p>
        <p className="text-sm md:text-base">
          Visite o site oficial da Cadena Imóveis.
        </p>
      </span>

      <a
        href="https://cadenaimoveis.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant={"default"}>Site oficial</Button>
      </a>

      <div className="md:flex justify-between items-center w-full">
        <p className="text-xs flex items-center gap-1">
          Created by
          <Button variant={"link"} className="text-xs p-0">
            <a
              href="https://www.linkedin.com/in/gabriel-augusto-5aab41236/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gabriel Augusto
            </a>
          </Button>
        </p>
        <p className="text-xs md:text-sm">&copy; 2024 - Vivenda Cadena</p>
      </div>
    </Card>
  );
}
