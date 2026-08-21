import Image from "next/image";
import Reveal from "./Reveal";
import { destaques } from "@/lib/site-data";

export default function Destaques() {
  return (
    <section id="destaques" className="bg-marrom-escuro py-24 md:py-32">
      <div className="mx-auto max-w-conteudo px-5 md:px-8">
        <div className="max-w-xl">
          <Reveal as="p" className="font-body text-xs uppercase tracking-[0.22em] text-dourado">
            Destaques
          </Reveal>
          <Reveal as="h2" delayMs={80} className="mt-4 text-[clamp(2.05rem,4vw,3.1rem)] font-display font-medium">
            O que sai mais bonito na mesa
          </Reveal>
          <Reveal as="p" delayMs={140} className="mt-5 text-[15.5px] leading-relaxed text-bege-claro/85">
            Uma seleção do que costuma render a melhor foto — sem cardápio fechado
            aqui, é só um gostinho do que você encontra por lá.
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {destaques.map((d, i) => (
            <Reveal
              key={d.imagem}
              delayMs={Math.min(i, 4) * 90}
              className={`group relative overflow-hidden rounded-suave border border-dourado/12 ${
                i === 0 ? "col-span-2 aspect-[8/5] md:col-span-1 md:aspect-[4/5]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={d.imagem + ".jpg"}
                alt={d.alt}
                fill
                sizes="(min-width: 768px) 30vw, 45vw"
                className="object-cover transition-transform duration-[750ms] ease-[cubic-bezier(.22,.61,.36,1)] group-hover:scale-[1.06]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-marrom-escuro/85 via-marrom-escuro/5 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-dourado-claro">
                  {d.categoria}
                </p>
                <p className="mt-1 font-display text-base text-branco-quente">{d.legenda}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
