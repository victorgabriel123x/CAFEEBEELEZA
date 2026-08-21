"use client";

import { useEffect, useRef, ReactNode } from "react";

/**
 * Revela o filho ao entrar na tela (fade + sobe 22px).
 * Sem JS ou com JS desabilitado, o conteúdo já nasce visível (a classe
 * "revela" só aparece quando o componente monta), então nada fica escondido.
 * Com prefers-reduced-motion, o CSS global já neutraliza a transição.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delayMs = 0,
}: {
  children: ReactNode;
  as?: any;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduz || !("IntersectionObserver" in window)) {
      el.classList.add("dentro");
      return;
    }
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((en) => {
          if (!en.isIntersecting) return;
          window.setTimeout(() => en.target.classList.add("dentro"), delayMs);
          obs.unobserve(en.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delayMs]);

  return (
    <Tag ref={ref} className={`revela ${className}`}>
      {children}
    </Tag>
  );
}
