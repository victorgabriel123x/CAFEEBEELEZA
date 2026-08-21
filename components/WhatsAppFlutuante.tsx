"use client";

import { useEffect, useState } from "react";
import { contato } from "@/lib/site-data";

export default function WhatsAppFlutuante() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={`https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(
        contato.whatsappMensagem
      )}`}
      target="_blank"
      rel="noopener"
      aria-label="Chamar no WhatsApp"
      className={`botao-flutuante ${visivel ? "visivel" : ""} fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-dourado text-marrom-escuro shadow-[0_18px_40px_-18px_rgba(0,0,0,.7)] transition-transform hover:scale-105`}
    >
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.86.5 3.6 1.4 5.1L2 22l5.05-1.4a9.9 9.9 0 0 0 4.97 1.33h.01c5.52 0 10-4.48 10-10S17.55 2 12.02 2Zm0 18.05h-.01a8.4 8.4 0 0 1-4.3-1.18l-.31-.18-3.06.85.82-3-.2-.32a8.34 8.34 0 0 1-1.28-4.4c0-4.62 3.76-8.38 8.39-8.38 2.24 0 4.34.87 5.93 2.46a8.32 8.32 0 0 1 2.46 5.93c0 4.63-3.77 8.38-8.44 8.22Zm4.6-6.28c-.25-.13-1.5-.74-1.73-.82-.23-.09-.4-.13-.57.13-.17.25-.65.82-.8 1-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.16-.25.24-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.2-.49-.42-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.13.17 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.5-.61 1.71-1.2.21-.6.21-1.11.15-1.21-.06-.11-.23-.17-.48-.3Z" />
      </svg>
    </a>
  );
}
