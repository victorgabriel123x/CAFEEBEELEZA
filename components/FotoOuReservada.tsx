"use client";

import { useState } from "react";

/**
 * Tenta mostrar a foto real (public/images/<arquivo>.jpg). Se o arquivo ainda
 * não existir, mostra um espaço reservado elegante no lugar — sem quebrar a
 * página. No dia em que alguém salvar a foto com o nome certo em
 * public/images/, ela aparece sozinha, sem mexer em nenhum código.
 */
export default function FotoOuReservada({
  arquivo,
  alt,
  legenda,
}: {
  arquivo: string;
  alt: string;
  legenda: string;
}) {
  const [falhou, setFalhou] = useState(false);

  if (falhou) {
    return (
      <div className="moldura-vazia flex h-full w-full flex-col items-center justify-center gap-3 rounded-suave px-4 text-center">
        <svg
          viewBox="0 0 22 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          aria-hidden="true"
          className="h-7 w-7 text-dourado/70"
        >
          <path d="M11 1 20.5 6.5v11L11 23 1.5 17.5v-11z" />
        </svg>
        <span className="text-sm text-bege-claro/80">{legenda}</span>
        <span className="text-[11px] uppercase tracking-[0.16em] text-cinza-bege/60">
          Foto em breve
        </span>
      </div>
    );
  }

  // <img> comum (não next/image) porque precisamos do evento onError
  // pra cair no espaço reservado quando o arquivo não existe.
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/${arquivo}.jpg`}
      alt={alt}
      loading="lazy"
      onError={() => setFalhou(true)}
      className="h-full w-full rounded-suave object-cover"
    />
  );
}
