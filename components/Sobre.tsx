import Image from "next/image";
import Reveal from "./Reveal";
import { sobre, destaques } from "@/lib/site-data";

export default function Sobre() {
  const foto = destaques[0];
  return (
    <section id="sobre" className="relative bg-marrom-chocolate py-24 md:py-32">
      <div className="mx-auto grid max-w-conteudo grid-cols-1 items-center gap-14 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <Reveal as="div" className="relative order-2 md:order-1">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-macia border border-dourado/15">
            <Image
              src={foto.imagem + ".jpg"}
              alt={foto.alt}
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -right-6 -z-10 hidden aspect-[4/5] w-full max-w-md rounded-macia border border-dourado/25 md:block"
          />
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal as="p" className="font-body text-xs uppercase tracking-[0.22em] text-dourado">
            {sobre.etiqueta}
          </Reveal>
          <Reveal as="h2" delayMs={80} className="mt-4 text-[clamp(2.05rem,4vw,3.1rem)] font-display font-medium">
            {sobre.titulo}
          </Reveal>
          <Reveal as="p" delayMs={140} className="mt-6 max-w-prose text-[15.5px] leading-relaxed text-bege-claro/90">
            {sobre.texto}
          </Reveal>
          <Reveal as="p" delayMs={200} className="mt-4 max-w-prose text-[15.5px] leading-relaxed text-bege-claro/80">
            {sobre.texto2}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
