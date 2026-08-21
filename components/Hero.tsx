"use client";

import { useEffect, useRef } from "react";
import CoffeeLineArt from "./CoffeeLineArt";
import { hero, contato } from "@/lib/site-data";

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  useEffect(() => {
    // quem pediu movimento reduzido no sistema não recebe o vídeo em
    // autoplay: fica só no quadro do poster, parado.
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduz && videoRef.current) {
      videoRef.current.play().catch(() => {
        /* alguns navegadores bloqueiam autoplay; o poster continua visível */
      });
    }
  }, []);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* video de fundo: o preparo do cafe, em loop */}
      <video
        ref={videoRef}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="/videos/hero.mp4"
        poster="/videos/hero-poster.jpg"
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* veu escuro sobre o video: garante leitura do texto e mantem a
          paleta vinho/dourado por cima da filmagem */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(58,22,32,.94) 8%, rgba(58,22,32,.82) 32%, rgba(58,22,32,.52) 58%, rgba(58,22,32,.32) 100%), linear-gradient(to top, rgba(58,22,32,.9), rgba(58,22,32,0) 38%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 82% 18%, rgba(215,166,62,.14), transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-conteudo px-5 py-16 md:px-8">
        <div className="max-w-xl">
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
      </div>

      {/* selo animado: o cafe desenhado em linha, em loop, sobre o video */}
      <div
        aria-hidden="true"
        className="entra absolute bottom-8 right-5 flex h-28 w-28 items-center justify-center rounded-full border border-dourado/30 bg-marrom-escuro/90 shadow-[0_18px_36px_-16px_rgba(0,0,0,.75)] backdrop-blur-sm md:bottom-10 md:right-10 md:h-36 md:w-36"
        style={{ ["--d" as any]: "260ms" }}
      >
        <CoffeeLineArt className="h-[72%] w-[72%]" />
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
