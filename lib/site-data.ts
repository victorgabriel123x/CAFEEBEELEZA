/**
 * site-data.ts
 * Fonte única de verdade para textos, contatos e listas do site.
 * Para trocar telefone, endereço, horário ou textos: mexa só aqui.
 * Nada de fato inventado (prêmios, avaliações, "desde 19xx") — só o que é real.
 */

export const marca = {
  nome: "Café e Beleza",
  nomeCurto: "Café e Beleza",
  slogan: "Um café pra parar, respirar e fotografar",
  logoCompleta: "/logo/logo-completo.png",
  logoIcone: "/logo/logo-icone.png",
  proporcaoCompleta: 1456 / 1023,
  proporcaoIcone: 936 / 825,
};

export const contato = {
  whatsappNumero: "5594981056972",
  whatsappExibicao: "(94) 98105-6972",
  whatsappMensagem: "Olá! Vim pelo site do Café e Beleza e queria saber mais 🙂",
  instagramUsuario: "@cafeebelezatuc",
  instagramUrl: "https://www.instagram.com/cafeebelezatuc/",
};

export const local = {
  logradouro: "Rua Raimundo Veridiano Cardoso, 78",
  bairro: "Bela Vista",
  cidadeEstado: "Tucuruí, PA",
  enderecoCompleto: "Rua Raimundo Veridiano Cardoso, 78, Bela Vista, Tucuruí, PA",
  buscaMaps: "Rua Raimundo Veridiano Cardoso, 78, Bela Vista, Tucuruí, PA",
};

export const horarios = [{ dias: "Segunda a sábado", horas: "9h às 19h" }];

export const nav = [
  { rotulo: "Início", alvo: "inicio" },
  { rotulo: "Sobre", alvo: "sobre" },
  { rotulo: "Destaques", alvo: "destaques" },
  { rotulo: "Galeria", alvo: "galeria" },
  { rotulo: "Localização", alvo: "localizacao" },
];

export const hero = {
  etiqueta: "Café instagramável · Tucuruí",
  tituloLinha1: "Café bom de olhar,",
  tituloLinha2: "melhor ainda de tomar",
  texto:
    "Um cantinho pensado pra câmera e pro paladar: mesa bem posta, luz gostosa e um cardápio de dar vontade de registrar antes de provar.",
  botaoPrimario: "Chamar no WhatsApp",
  botaoSecundario: "Ver no Instagram",
};

export const sobre = {
  etiqueta: "Sobre",
  titulo: "Um café pensado em detalhes",
  texto:
    "O Café e Beleza nasceu pra ser aquele lugar que fica bonito em qualquer ângulo: mesas montadas com cuidado, doces com cara de vitrine e um cafézinho que sustenta a conversa. Cada prato sai pensado pra ficar bonito na xícara e no feed.",
  texto2:
    "Fica na Bela Vista, em Tucuruí, aberto de segunda a sábado. Se você está de passagem ou é da vizinhança, sempre tem lugar pra mais uma foto e mais um café.",
};

export type ItemDestaque = {
  imagem: string;
  alt: string;
  legenda: string;
  categoria: string;
};

export const destaques: ItemDestaque[] = [
  {
    imagem: "/images/destaque-1",
    alt: "Mesa com bolo de chocolate com morangos, pudim, brigadeirão e cappuccino com desenho em leite",
    legenda: "Mesa de doces da casa",
    categoria: "Doces",
  },
  {
    imagem: "/images/destaque-5",
    alt: "Bolo red velvet decorado com morangos e chantilly",
    legenda: "Red velvet com morangos",
    categoria: "Doces",
  },
  {
    imagem: "/images/destaque-2",
    alt: "Prato com frango ao molho cremoso, arroz branco e batata palha",
    legenda: "Frango ao molho cremoso",
    categoria: "Pratos",
  },
  {
    imagem: "/images/destaque-3",
    alt: "Prato com peixe grelhado, alcaparras, arroz, salada e tomate cereja",
    legenda: "Peixe grelhado com alcaparras",
    categoria: "Pratos",
  },
  {
    imagem: "/images/destaque-4",
    alt: "Bandeja com salgados, refrigerante e mini bolo de chocolate com morango",
    legenda: "Bandeja de salgados",
    categoria: "Salgados",
  },
];

export const galeriaAmbiente = [
  { arquivo: "ambiente-fachada", legenda: "Fachada", alt: "Fachada do Café e Beleza" },
  { arquivo: "ambiente-salao", legenda: "Salão", alt: "Salão do Café e Beleza" },
  {
    arquivo: "ambiente-cantinho",
    legenda: "Cantinho das fotos",
    alt: "Cantinho instagramável do Café e Beleza",
  },
  { arquivo: "ambiente-balcao", legenda: "Balcão", alt: "Balcão do Café e Beleza" },
];

export const ctaFinal = {
  titulo: "Bora marcar uma mesa?",
  texto: "Chama no WhatsApp e a gente já vai preparando o café.",
  botao: "Chamar no WhatsApp",
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: marca.nome,
  image: "https://exemplo.com.br/logo/logo-completo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: local.logradouro,
    addressLocality: "Tucuruí",
    addressRegion: "PA",
    addressCountry: "BR",
  },
  telephone: "+5594981056972",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
};
