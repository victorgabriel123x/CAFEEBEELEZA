"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { marca, nav, contato } from "@/lib/site-data";

export default function Header() {
  const [fixo, setFixo] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => setFixo(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-aberto", aberto);
  }, [aberto]);

  function irPara(id: string) {
    setAberto(false);
    const alvo = document.getElementById(id);
    if (!alvo) return;
    const cabecalho = document.querySelector(".cabecalho") as HTMLElement | null;
    const desconto = id === "inicio" ? 0 : (cabecalho?.offsetHeight ?? 84) - 1;
    const topo = alvo.getBoundingClientRect().top + window.scrollY - desconto;
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: Math.max(topo, 0), behavior: reduz ? "auto" : "smooth" });
    try {
      history.replaceState(null, "", "#" + id);
    } catch {
      /* file:// bloqueia, sem problema */
    }
  }

  return (
    <header
      className={`cabecalho fixed inset-x-0 top-0 z-40 ${fixo ? "fixo" : ""}`}
    >
      <div className="mx-auto flex max-w-conteudo items-center justify-between px-5 py-3 md:px-8">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            irPara("inicio");
          }}
          className="flex items-center gap-2"
          aria-label={marca.nome}
        >
          <Image
            src={marca.logoIcone}
            alt={marca.nome}
            width={44}
            height={Math.round(44 / marca.proporcaoIcone)}
            priority
          />
          <span className="font-display text-lg tracking-wide text-branco-quente">
            {marca.nomeCurto}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {nav.map((n) => (
            <a
              key={n.alvo}
              href={`#${n.alvo}`}
              onClick={(e) => {
                e.preventDefault();
                irPara(n.alvo);
              }}
              className="link-sublinhado font-body text-sm text-bege-claro/90 hover:text-dourado-claro transition-colors"
            >
              {n.rotulo}
            </a>
          ))}
          <a
            href={`https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(
              contato.whatsappMensagem
            )}`}
            target="_blank"
            rel="noopener"
            className="rounded-full border border-dourado/50 px-4 py-2 text-sm text-dourado-claro transition-all hover:border-dourado hover:bg-dourado/10"
          >
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-expanded={aberto}
          aria-controls="menu-mobile"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          onClick={() => setAberto((v) => !v)}
        >
          <span
            className="block h-px w-6 bg-bege-claro transition-transform"
            style={{ transform: aberto ? "translateY(6px) rotate(45deg)" : "none" }}
          />
          <span
            className="block h-px w-6 bg-bege-claro transition-opacity"
            style={{ opacity: aberto ? 0 : 1 }}
          />
          <span
            className="block h-px w-6 bg-bege-claro transition-transform"
            style={{ transform: aberto ? "translateY(-6px) rotate(-45deg)" : "none" }}
          />
        </button>
      </div>

      {aberto && (
        <nav
          id="menu-mobile"
          className="menu-mobile border-t border-dourado/10 bg-marrom-escuro/98 px-5 pb-6 pt-2 md:hidden"
          aria-label="Navegação móvel"
        >
          {nav.map((n, i) => (
            <a
              key={n.alvo}
              href={`#${n.alvo}`}
              style={{ ["--d" as any]: `${70 + i * 55}ms` }}
              onClick={(e) => {
                e.preventDefault();
                irPara(n.alvo);
              }}
              className="block border-b border-dourado/10 py-3 font-display text-lg text-bege-claro"
            >
              {n.rotulo}
            </a>
          ))}
          <a
            href={`https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(
              contato.whatsappMensagem
            )}`}
            target="_blank"
            rel="noopener"
            className="btn-menu mt-4 block rounded-full bg-dourado px-5 py-3 text-center font-medium text-marrom-escuro"
            style={{ ["--d" as any]: `${70 + nav.length * 55}ms` }}
          >
            Chamar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
