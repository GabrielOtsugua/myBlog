import Image from "next/image";
import history2 from "@/assets/history2.jpg";
import Footer from "@/components/Footer";

export default function History() {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8">
        <aside className="flex justify-center">
          <Image src={history2} alt="" className="rounded object-cover" />
        </aside>

        <main className="flex flex-col gap-4">
          <h1 className="text-lg font-semibold">Nossa história</h1>
          <p>
            Pedro Leopoldo, CEO da organização, é apaixonado por escaladas há
            mais de 12 anos e se inspirou nesse universo para trazer a Cadena ao
            mercado imobiliário, que se instalou Curitiba - PR. "Cadena"
            significa completar uma via realizando todos os movimentos sem cair
            ou usar equipamentos. Segundo Pedro, 'mais que escalada, cadena é
            aquele momento mágico em que todas as dificuldades tornam a vitória
            ainda mais gostosa!'.
          </p>
          <p>
            A Cadena tem como propósito ajudar todos que se conectam com a marca
            a conquistarem seus objetivos. Sua missão é proporcionar segurança e
            conforto na prestação de serviços imobiliários e sua visão é ser
            referência em experiência do cliente até 2026. Seus valores são
            honestidade, respeito, responsabilidade e resultado.
          </p>
        </main>
      </div>

      <Footer />
    </div>
  );
}
