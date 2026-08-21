"use client";

import { useEffect, useRef } from "react";
import CoffeeLineArt from "./CoffeeLineArt";
import { hero, contato } from "@/lib/site-data";

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let abriu = false;
    function abrir() {
      if (abriu || !el) return;
      abriu = true;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => el!.classList.add("secao-pronta"));
      });
    }
    if (document.fonts && (document as any).fonts.ready) {
      (document as any).fonts.ready.then(abrir);
    } else {
      window.addEventListener("load", abrir);
    }
    const seguranca = window.setTimeout(abrir, 2200);
    return () => window.clearTimeout(seguranca);
  }, []);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* textura de fundo sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 78% 22%, rgba(215,166,62,.16), transparent 60%), radial-gradient(50% 45% at 12% 85%, rgba(215,166,62,.10), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-conteudo grid-cols-1 items-center gap-12 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:px-8">
        <div>
          <p
            className="entra font-body text-xs uppercase tracking-[0.22em] text-dourado-claro"
            style={{ ["--d" as any]: "60ms" }}
          >
            {hero.etiqueta}
          </p>

          <h1 className="mt-5 text-[clamp(2.4rem,5.2vw,3.9rem)] font-display font-medium">
            <span className="pal block overflow-visible" style={{ ["--d" as any]: "260ms" }}>
              {hero.tituloLinha1}
            </span>
            <span
              className="pal block overflow-visible italic text-dourado-claro"
              style={{ ["--d" as any]: "420ms" }}
            >
              {hero.tituloLinha2}
            </span>
          </h1>

          <p
            className="entra mt-6 max-w-md text-[15.5px] leading-relaxed text-bege-claro/90"
            style={{ ["--d" as any]: "620ms" }}
          >
            {hero.texto}
          </p>

          <div className="entra mt-9 flex flex-wrap items-center gap-4" style={{ ["--d" as any]: "780ms" }}>
            <a
              href={`https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(
                contato.whatsappMensagem
              )}`}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-dourado px-7 py-3.5 text-sm font-medium text-marrom-escuro transition-transform duration-300 hover:scale-[1.03] hover:bg-dourado-claro"
            >
              {hero.botaoPrimario}
            </a>
            <a
              href={contato.instagramUrl}
              target="_blank"
              rel="noopener"
              className="link-sublinhado text-sm text-bege-claro/90 hover:text-dourado-claro"
            >
              {hero.botaoSecundario} ({contato.instagramUsuario})
            </a>
          </div>
        </div>

        <div
          className="entra relative mx-auto aspect-square w-full max-w-sm"
          style={{ ["--d" as any]: "180ms" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-6 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(215,166,62,.14), transparent 72%)",
            }}
          />
          <CoffeeLineArt className="relative h-full w-full" />
        </div>
      </div>

      <a
        href="#sobre"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="entra absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-cinza-bege/70 md:flex"
        style={{ ["--d" as any]: "1000ms" }}
        aria-hidden="true"
        tabIndex={-1}
      >
        Role
        <span className="h-8 w-px bg-cinza-bege/40" />
      </a>
    </section>
  );
}
