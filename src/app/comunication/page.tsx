import Image from "next/image";
import infografico_1 from "@/assets/infografico_1.png";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Comunication() {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8">
        <aside>
          <figure className="flex gap-4">
            <Image
              src={infografico_1}
              alt=""
              className="rounded object-cover"
            />
          </figure>

          <a
            href="https://drive.google.com/file/d/1chpksGa4doXaxmLd4iaRaIvv1whFCR_W/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant={"link"}>Ver imagem completa</Button>
          </a>
        </aside>

        <main className="flex flex-col gap-4">
          <h1 className="text-lg font-semibold">Nossa comunicação</h1>
          <p>
            Na Cadena Imóveis, a comunicação é clara, de uma forma que garanta o
            entendimento das informações. O pricipal fluxo comunicacional é
            vertical descendente, com gestores transmitindo diretrizes e
            informações para os colaboradores. Também há fluxos horizontais que
            facilitam a comunicação entre diferentes equipes.
          </p>
          <p>
            Internamente, a esmpresa utiliza emails e plataformas para gestão e
            reunião, enquanto externamente utiliza mensagens por aplicativos,
            redes sociais e seu próprio site.
          </p>
          <p>
            Apesar de sua estrutura comunicacional, a Cadena Imóveis enfrenta
            desafios, como a falta de um feedback ascendente eficaz e a
            necessidade de melhor integração entre departamentos. Para resolver
            esses problemas, a empresa pode implementar canais de feedback para
            os colaboradores e utilizar plataformas que facilitem a troca de
            informações.
          </p>
          <p>
            Com essas melhorias, a Cadena Imóveis pode melhorar ainda mais sua
            comunicação, fortalecendo seu compromisso com a transparência e a
            satisfação do cliente.
          </p>
        </main>
      </div>

      <Footer />
    </div>
  );
}
