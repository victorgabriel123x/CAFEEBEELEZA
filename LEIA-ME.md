# Café e Beleza — site

Landing page em Next.js (React + TypeScript + Tailwind) pro café. Hero com um
café desenhado em linha animando em loop, seções de destaques, galeria,
localização e contato — sem cardápio com preço, sem reservas, sem loja e sem
blog, como combinado.

## Como rodar

Precisa do [Node.js](https://nodejs.org) instalado (versão 18 ou mais nova).

```bash
npm install       # só na primeira vez
npm run dev       # ambiente de desenvolvimento, com recarregamento automático
```

Abra http://localhost:3000 no navegador.

Para gerar a versão de produção (mais rápida, otimizada):

```bash
npm run build
npm run start
```

## Como publicar

O jeito mais simples é a [Vercel](https://vercel.com) (mesma empresa do
Next.js): conecta a pasta do projeto (ou um repositório Git) e ela cuida do
resto, gratuitamente para esse tamanho de site. Outras opções: Netlify, ou
qualquer serviço que rode Node.js.

## Prévia ao colar o link (WhatsApp, Instagram etc.)

Já vem pronta: existe uma imagem de compartilhamento em
`public/logo/og.jpg` (1200×630, com o nome, "Bela Vista · Tucuruí, PA" e a
frase de efeito) e o site já anuncia ela pro WhatsApp/Instagram/Facebook via
`openGraph` em `app/layout.tsx`. Não precisa fazer nada extra.

O único detalhe: o endereço usado nessa prévia (`og:image`, `og:url`) é
calculado sozinho a partir do domínio da Vercel (variável `VERCEL_URL`, que a
Vercel já define automaticamente a cada deploy) — então funciona assim que
você subir, sem precisar editar nada. Se um dia colocar um domínio próprio
(tipo `cafeebeleza.com.br`), só defina a variável de ambiente
`NEXT_PUBLIC_SITE_URL` nas configurações do projeto na Vercel, com esse
endereço.

Depois de publicar, para ver a prévia atualizar no WhatsApp (ele guarda em
cache), use o [debugger do Facebook](https://developers.facebook.com/tools/debug/)
colando o link e clicando em "Buscar novamente" — é o mesmo cache que o
WhatsApp usa.

Quer trocar a imagem de prévia? Gere uma nova de 1200×630 e salve por cima de
`public/logo/og.jpg`.

## Como trocar textos, telefone, endereço e horário

Tudo fica em **`lib/site-data.ts`**. É o único arquivo que precisa mexer pra
trocar conteúdo:

- `contato` — número de WhatsApp, mensagem padrão, Instagram
- `local` — endereço
- `horarios` — dias e horas de funcionamento
- `hero`, `sobre`, `ctaFinal` — os textos de cada seção
- `destaques` — a lista de fotos de destaque (imagem, legenda, categoria)

Depois de editar e salvar, se estiver com `npm run dev` aberto, a página
atualiza sozinha.

## O que ainda falta

**Fotos do ambiente.** A seção "Galeria" foi montada pra receber fotos do
espaço (fachada, salão, cantinho das fotos, balcão), mas essas fotos ainda não
existem — só recebemos fotos de produto (doces e pratos), que já estão em uso
na seção "Destaques". Em vez de reaproveitar as fotos de comida ali (o que
confundiria quem visita) ou fingir que a seção estava pronta, cada quadro da
galeria mostra um espaço reservado elegante até a foto real chegar.

Assim que tiver as fotos, salve cada uma em `public/images/` com estes nomes
exatos (proporção 4:5, retrato):

| arquivo | o que deve mostrar |
|---|---|
| `public/images/ambiente-fachada.jpg` | fachada do café |
| `public/images/ambiente-salao.jpg` | salão / mesas |
| `public/images/ambiente-cantinho.jpg` | o cantinho mais fotografado |
| `public/images/ambiente-balcao.jpg` | balcão |

Assim que o arquivo existir com o nome certo, a foto aparece sozinha — não
precisa mexer em nenhum código.

**Domínio próprio.** Quando o site tiver um endereço definitivo (ex.:
`cafeebeleza.com.br`), atualize a linha `metadataBase` em `app/layout.tsx` e a
imagem de compartilhamento em `openGraph.images`, pra troca de link no
WhatsApp/Instagram mostrar a prévia certa.

## O que já está pronto

- Hero com café desenhado em linha, animando em loop (puro CSS/SVG, funciona
  sem depender de internet além das fontes)
- Header fixo que encolhe ao rolar, com menu mobile animado
- Seções: Início, Sobre, Destaques (5 fotos tratadas), Galeria, Localização
  (mapa incorporado + botão de rota), CTA final
- Botão flutuante de WhatsApp
- Textos sem nenhum dado inventado — só o que você passou (telefone, Instagram,
  endereço, horário)
- Acessibilidade: link de pular para o conteúdo, HTML semântico, texto
  alternativo em toda imagem, contraste verificado, respeita a preferência de
  "reduzir movimento" do sistema (desliga as animações pra quem pediu isso)
- SEO: título, meta descrição, Open Graph, JSON-LD de negócio local

## Sobre a logo

A logo "Café e Beleza" foi mantida como está (foi uma decisão sua). O nome
"Beleza" aparece só na marca — nenhum texto do site menciona salão, beleza ou
qualquer serviço que não seja o café. Os arquivos originais da logo e das
fotos continuam intactos em `Café e Beleza/FOTOS/` — nada foi sobrescrito.

## Sobre o tratamento das fotos

As 5 fotos usadas em "Destaques" tinham fundos bem diferentes entre si (floral
rosa, escuro, desfocado). Pra ficarem visualmente como uma coleção só, foi
aplicado um tratamento de cor (tom quente, unificado com a paleta
vinho/rosa/dourado do site) e uma leve vinheta — sem alterar o prato, o bolo ou
qualquer conteúdo da foto em si. Isso é só ajuste de apresentação, igual a um
filtro; nada foi retocado ou editado no que a foto mostra.

## Estrutura de pastas

```
site-cafe/
├── app/                  layout, página inicial, estilos globais
├── components/           cada seção do site é um componente
├── lib/site-data.ts       todo o conteúdo editável (o arquivo que você mexe)
├── public/
│   ├── images/           fotos de destaques + espaço pras fotos de ambiente
│   └── logo/             logo recortada e favicons
└── LEIA-ME.md            este arquivo
```
