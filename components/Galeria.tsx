import Reveal from "./Reveal";
import FotoOuReservada from "./FotoOuReservada";
import { galeriaAmbiente } from "@/lib/site-data";

/**
 * Ainda não recebemos fotos do ambiente (fachada, salão, cantinho das fotos,
 * balcão). Em vez de reaproveitar as fotos de produto (o que confundiria o
 * visitante) ou fingir que a seção está completa, cada quadro tenta carregar
 * o arquivo real e cai num espaço reservado elegante se ele não existir.
 * Assim que alguém salvar a foto com o nome certo em public/images/, ela
 * aparece sozinha — ver o LEIA-ME na raiz do projeto.
 */
export default function Galeria() {
  return (
    <section id="galeria" className="bg-marrom-chocolate py-24 md:py-32">
      <div className="mx-auto max-w-conteudo px-5 md:px-8">
        <div className="max-w-xl">
          <Reveal as="p" className="font-body text-xs uppercase tracking-[0.22em] text-dourado">
            Galeria
          </Reveal>
          <Reveal as="h2" delayMs={80} className="mt-4 text-[clamp(2.05rem,4vw,3.1rem)] font-display font-medium">
            O ambiente
          </Reveal>
          <Reveal as="p" delayMs={140} className="mt-5 text-[15.5px] leading-relaxed text-bege-claro/85">
            Fotos do espaço chegando em breve fachada, salão e o cantinho
            preferido pra fotos.
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {galeriaAmbiente.map((g, i) => (
            <Reveal key={g.arquivo} delayMs={Math.min(i, 4) * 90} className="aspect-[4/5]">
              <FotoOuReservada arquivo={g.arquivo} alt={g.alt} legenda={g.legenda} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
