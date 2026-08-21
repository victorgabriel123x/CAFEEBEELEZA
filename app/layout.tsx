import type { Metadata } from "next";
import "./globals.css";
import { jsonLd, marca, local } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://exemplo.com.br"),
  title: "Café e Beleza — Café instagramável em Tucuruí, PA",
  description:
    "Café e Beleza: café instagramável na Bela Vista, Tucuruí/PA. Doces, pratos e um cantinho pensado pra fotografar. Seg a sáb, 9h às 19h.",
  keywords: [
    "café instagramável Tucuruí",
    "café Tucuruí",
    "café Bela Vista Tucuruí",
    "Café e Beleza",
  ],
  openGraph: {
    title: "Café e Beleza — café instagramável em Tucuruí, PA",
    description:
      "Doces, pratos e um cantinho pensado pra fotografar. Seg a sáb, 9h às 19h, na Bela Vista, Tucuruí/PA.",
    images: ["/logo/logo-completo.png"],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/logo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/logo/favicon-180.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* fontes: Fraunces (display) + Work Sans (texto), via Google Fonts.
            Carregadas por link (não por next/font) pra não depender de
            acesso à rede durante o build. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Work+Sans:wght@400;500;600&display=swap"
        />
        {/* trava 1: sem JS, nada fica escondido — só com essa classe presente
            é que os elementos "entra"/"pal" começam invisíveis */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.className += ' js';",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#conteudo" className="pular-conteudo">
          Pular para o conteúdo
        </a>
        <noscript>
          <div style={{ padding: "1rem", background: "#332119", color: "#F7F1E8" }}>
            {marca.nome} — {local.enderecoCompleto}. Segunda a sábado, 9h às 19h.
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
