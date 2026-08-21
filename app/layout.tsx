import type { Metadata, Viewport } from "next";
import "./globals.css";
import { jsonLd, marca, local } from "@/lib/site-data";

/**
 * URL base pra montar links absolutos (og:image, canonical etc).
 * Essa página é gerada de forma estática (o Next imprime o HTML uma vez,
 * no build), então esse endereço é calculado durante o build na Vercel —
 * não a cada visita. VERCEL_URL muda a cada deploy (aponta pro endereço
 * daquele deploy específico, não pro domínio final), por isso a ordem de
 * preferência abaixo usa primeiro o domínio de produção estável.
 *
 * Se a prévia do link não aparecer no WhatsApp/Instagram, o mais provável
 * é essa variável não estar apontando pro domínio certo. O jeito garantido
 * de resolver: em vercel.com → seu projeto → Settings → Environment
 * Variables, adicione NEXT_PUBLIC_SITE_URL com o valor
 * "https://SEU-DOMINIO.vercel.app" (ou seu domínio próprio, se tiver um),
 * marque para Production, e refaça o deploy (Redeploy). Sem redeploy essa
 * variável não entra no HTML já gerado.
 */
const urlBase =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(urlBase),
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
    images: [{ url: "/logo/og.jpg", width: 1200, height: 630, alt: marca.nome }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Café e Beleza — café instagramável em Tucuruí, PA",
    description: "Doces, pratos e um cantinho pensado pra fotografar, na Bela Vista, Tucuruí/PA.",
    images: ["/logo/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/logo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/logo/favicon-180.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#3A1620",
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
          <div style={{ padding: "1rem", background: "#3A1620", color: "#FBEEEB" }}>
            {marca.nome} — {local.enderecoCompleto}. Segunda a sábado, 9h às 19h.
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
