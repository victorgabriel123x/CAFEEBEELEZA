import Reveal from "./Reveal";
import CoffeeLineArt from "./CoffeeLineArt";
import { ctaFinal, contato } from "@/lib/site-data";

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-marrom-chocolate py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden w-72 -translate-y-1/2 opacity-[0.14] md:block"
      >
        <CoffeeLineArt className="h-full w-full" />
      </div>
      <div className="relative mx-auto max-w-conteudo px-5 text-center md:px-8">
        <Reveal as="h2" className="mx-auto max-w-xl text-[clamp(2.1rem,4.4vw,3.3rem)] font-display font-medium">
          {ctaFinal.titulo}
        </Reveal>
        <Reveal as="p" delayMs={100} className="mx-auto mt-4 max-w-md text-[15.5px] text-bege-claro/85">
          {ctaFinal.texto}
        </Reveal>
        <Reveal as="div" delayMs={180} className="mt-9">
          <a
            href={`https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(
              contato.whatsappMensagem
            )}`}
            target="_blank"
            rel="noopener"
            className="inline-block rounded-full bg-dourado px-9 py-4 text-base font-medium text-marrom-escuro transition-transform hover:scale-[1.03] hover:bg-dourado-claro"
          >
            {ctaFinal.botao}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
