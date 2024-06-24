"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import mountains from "@/assets/mountains.jpg";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import destaquesVenda from "@/assets/destaquesVenda.png";
import destaquesLocacao from "@/assets/destaquesLocacao.png";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <div className="relative w-full h-[500px] flex items-end rounded">
        <Image
          src={mountains}
          alt=""
          className="absolute top-0 h-full -z-10 rounded object-cover"
        />

        <div className="text-white lg:w-4/5 xl:w-3/5 flex flex-col gap-4 p-8">
          <p className="text-base md:text-lg">Seja bem vindo</p>
          <p className="font-bold text-lg md:text-xl">
            A Cadena tem como propósito ajudar todos que se conectam com a marca
            a conquistarem seus objetivos
          </p>
          <p className="text-sm md:text-base">
            Sua missão é proporcionar segurança e conforto na prestação de
            serviços imobiliários e sua visão é ser referência em experiência do
            cliente até 2026. Seus valores são honestidade, respeito,
            responsabilidade e resultado.
          </p>
        </div>
      </div>

      <h2 className="text-xl mt-16 mb-8 font-semibold">Destaques</h2>

      <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        <Dialog>
          <DialogTrigger asChild>
            <li className="flex flex-col gap-2 rounded cursor-pointer">
              <div className="bg-muted flex justify-center items-center h-56 w-full rounded">
                <h1 className="text-xl text-primary">Portfólio</h1>
              </div>
              <h2 className="font-semibold text-lg line-clamp-1">Portfólio</h2>
              <p className="line-clamp-2">
                A Cadena Imóveis apresenta diversos serviços, entre os
                principais estão a compra, venda e locação de imóveis
                residenciais e comerciais.
              </p>
            </li>
          </DialogTrigger>

          <DialogContent className="flex flex-col items-start overflow-auto w-11/12 md:w-auto max-h-[580px] rounded">
            <DialogTitle className="text-lg font-semibold">
              Portfólio
            </DialogTitle>
            <p>
              A Cadena Imóveis apresenta diversos serviços, entre os principais
              estão a compra, venda e locação de imóveis residenciais e
              comerciais.
            </p>
            <p>
              Como uma empresa que deseja ser vista como referência até 2026,
              também possui diferenciais mercadológicos: excelente atendimento
              ao cliente, plataforma para busca e aquisição de imóveis, e alto
              índice de satisfação.
            </p>
            <p>
              Seu público-alvo são jovens profissionais em busca do primeiro
              imóvel, famílias que desejam expandir suas moradias, investidores
              imobiliários e empresas buscando espaços comerciais.
            </p>

            <h2 className="font-semibold">Destaques para venda</h2>
            <figure>
              <Image src={destaquesVenda} alt="" />
            </figure>

            <h2 className="font-semibold">Destaques para locação</h2>
            <figure>
              <Image src={destaquesLocacao} alt="" />
            </figure>

            <a
              href="https://cadenaimoveis.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={"link"} className="w-auto">
                Confira a disponibilidade
              </Button>
            </a>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <li className="flex flex-col gap-2 rounded cursor-pointer">
              <div className="bg-muted flex justify-center items-center h-56 w-full rounded">
                <h1 className="text-primary text-xl">Notícia</h1>
              </div>
              <h2 className="font-semibold text-lg line-clamp-1">
                A importância da comunicação nas organizações
              </h2>
              <p className="line-clamp-2">
                a comunicação é fundamental para a organização sobreviver e ter
                um bom relacionamento com esses diferentes públicos.
              </p>
            </li>
          </DialogTrigger>

          <DialogContent className="flex flex-col items-start overflow-auto w-11/12 md:w-auto max-h-[580px] rounded">
            <DialogTitle className="text-lg font-semibold">
              A importância da comunicação nas organizações
            </DialogTitle>
            <p>
              A comunicação é muito importante para a empresa sobreviver e ter
              um bom relacionamento com diferentes públicos. Mas ela só se dá
              através do processo de interação que a empresa desenvolve.
            </p>

            <h2 className="font-semibold">Os perigos da Incomunicação</h2>
            <p>
              Segundo pesquisa realizada pela secretária executiva Elaine Bez
              Birolo Casagrande, no ano de 2010, em uma empresa do ramo
              alimentício na cidade de Jacinto Machado, Santa Catarina, pode-se
              dizer que 52% dos colaboradores entendem parcialmente as
              informações que recebem e apenas 22% entendem a mensagem por
              completo. Essas falhas na comunicação geram desentendimentos,
              atrasos em prazos e projetos devido à falta de clareza sobre como
              desenvolver determinadas pedidos, além de desmotivar
              colaboradores.
            </p>

            <h2 className="font-semibold">
              A comunicação no ambiente de trabalho
            </h2>
            <p>
              A comunicação compreende uma série de ferramentas que ajudam a
              manter todos os colaboradores a par do que está acontecendo na
              empresa, sua missão, visão e valores, planos estratégicos, ações
              táticas e procedimentos operacionais. Suas quatro funções mais
              básicas são: controle, motivação, expressão e informação passada.
            </p>

            <h2 className="font-semibold">
              A importância da comunicação nas organizações
            </h2>
            <p>
              A construção de uma comunicação eficaz permite a interação e
              conexão de todo o universo corporativo.
            </p>

            <h2 className="font-semibold">
              Saiba como aplicar a comunicação na empresa
            </h2>
            <p>
              Enxergar o cenário como um todo e a importância da comunicação
              empresarial influencia na qualidade e entrega do produto. É
              importante que as mesmas coisas que os clientes procuram sejam as
              mesmas coisas que os colaboardores entregam.
            </p>

            <h2 className="font-semibold">
              4 dicas para se comunicar de forma eficiente
            </h2>
            <p>1. Pense em como você irá falar/escrever</p>
            <p>2. Conheça a pessoa que receberá a mensagem</p>
            <p>3. Faça uma autoanálise</p>
            <p>4. Passe suas impressões adiante</p>

            <a
              href="https://endomarketing.tv/importancia-da-comunicacao-nas-organizacoes/#.Xp82XchKhhF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant={"link"}>Fonte da notícia completa</Button>
            </a>
          </DialogContent>
        </Dialog>
      </ul>

      <Card className="w-full flex flex-col items-center gap-8 rounded mt-16 p-4 md:p-8 bg-muted">
        <span className="text-center">
          <p className="text-base md:text-lg font-semibold">
            Quer falar conosco ou não sabe por onde começar?
          </p>
          <p className="text-sm md:text-base">
            Segue as opções abaixo para mais detalhes.
          </p>
        </span>

        <span className="flex gap-4">
          <Button onClick={() => router.push("/contactUs")} variant={"default"}>
            Fale conosco
          </Button>
          <Button onClick={() => router.push("/history")} variant={"default"}>
            Comece por aqui
          </Button>
        </span>

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
    </div>
  );
}
