export default function Portfolio() {
  return (
    <div className="grid grid-cols-2 gap-8 mt-16">
      <aside>
        <div className="bg-black h-96 rounded"></div>
      </aside>

      <main className="flex flex-col gap-4">
        <h1 className="text-lg font-semibold">Portfólio</h1>
        <p>
          A Cadena Imóveis apresenta diversos serviços, entre os principais
          estão a compra, venda e locação de imóveis residenciais e comerciais.
        </p>
        <p>
          Como uma empresa que deseja ser vista como referência até 2026, também
          possui diferenciais mercadológicos: excelente atendimento ao cliente,
          plataforma para busca e aquisição de imóveis, e alto índice de
          satisfação.
        </p>
        <p>
          Seu público-alvo são jovens profissionais em busca do primeiro imóvel,
          famílias que desejam expandir suas moradias, investidores imobiliários
          e empresas buscando espaços comerciais.
        </p>
      </main>
    </div>
  );
}
