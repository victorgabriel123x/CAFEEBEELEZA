import Reveal from "./Reveal";
import { local, horarios, contato } from "@/lib/site-data";

export default function Localizacao() {
  const mapaSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    local.buscaMaps
  )}&hl=pt-BR&z=16&output=embed`;
  const rotaHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    local.buscaMaps
  )}`;

  return (
    <section id="localizacao" className="bg-marrom-escuro py-24 md:py-32">
      <div className="mx-auto grid max-w-conteudo grid-cols-1 gap-12 px-5 md:grid-cols-[0.85fr_1.15fr] md:px-8">
        <div>
          <Reveal as="p" className="font-body text-xs uppercase tracking-[0.22em] text-dourado">
            Localização
          </Reveal>
          <Reveal as="h2" delayMs={80} className="mt-4 text-[clamp(2.05rem,4vw,3.1rem)] font-display font-medium">
            Como chegar e quando
          </Reveal>

          <Reveal as="div" delayMs={160} className="mt-8 space-y-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-dourado-claro">Endereço</p>
              <p className="mt-1 text-[15.5px] text-bege-claro/90">
                {local.logradouro}
                <br />
                {local.bairro} · {local.cidadeEstado}
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-dourado-claro">Horário</p>
              <ul className="mt-1 space-y-1 text-[15.5px] text-bege-claro/90">
                {horarios.map((h) => (
                  <li key={h.dias}>
                    {h.dias}: {h.horas}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={rotaHref}
                target="_blank"
                rel="noopener"
                className="rounded-full bg-dourado px-6 py-3 text-sm font-medium text-marrom-escuro transition-transform hover:scale-[1.03] hover:bg-dourado-claro"
              >
                Como chegar
              </a>
              <a
                href={`https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(
                  contato.whatsappMensagem
                )}`}
                target="_blank"
                rel="noopener"
                className="link-sublinhado self-center text-sm text-bege-claro/90 hover:text-dourado-claro"
              >
                {contato.whatsappExibicao}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal
          as="div"
          delayMs={120}
          className="aspect-[4/3] w-full overflow-hidden rounded-macia border border-dourado/15 md:aspect-auto md:h-full md:min-h-[360px]"
        >
          <iframe
            src={mapaSrc}
            title={`Mapa até ${local.enderecoCompleto}`}
            loading="lazy"
            className="h-full w-full filter grayscale-[0.32] sepia-[0.12]"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
