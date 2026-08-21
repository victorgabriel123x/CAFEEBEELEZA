import Image from "next/image";
import { marca, contato, local, horarios, nav } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-dourado/10 bg-marrom-escuro pb-8 pt-16">
      <div className="mx-auto grid max-w-conteudo grid-cols-1 gap-10 px-5 md:grid-cols-[1.1fr_0.9fr_0.9fr] md:px-8">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src={marca.logoIcone}
              alt={marca.nome}
              width={36}
              height={Math.round(36 / marca.proporcaoIcone)}
            />
            <span className="font-display text-base text-branco-quente">{marca.nomeCurto}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-bege-claro/70">{marca.slogan}</p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-dourado-claro">Navegue</p>
          <ul className="mt-3 space-y-2">
            {nav.map((n) => (
              <li key={n.alvo}>
                <a href={`#${n.alvo}`} className="text-sm text-bege-claro/80 hover:text-dourado-claro">
                  {n.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-dourado-claro">Contato</p>
          <ul className="mt-3 space-y-2 text-sm text-bege-claro/80">
            <li>
              <a
                href={`https://wa.me/${contato.whatsappNumero}`}
                target="_blank"
                rel="noopener"
                className="hover:text-dourado-claro"
              >
                {contato.whatsappExibicao}
              </a>
            </li>
            <li>
              <a href={contato.instagramUrl} target="_blank" rel="noopener" className="hover:text-dourado-claro">
                {contato.instagramUsuario}
              </a>
            </li>
            <li>{local.logradouro}, {local.bairro}</li>
            <li>{local.cidadeEstado}</li>
            {horarios.map((h) => (
              <li key={h.dias}>
                {h.dias}: {h.horas}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-conteudo px-5 md:px-8">
        <div className="border-t border-dourado/10 pt-6 text-xs text-cinza-bege/60">
          © {new Date().getFullYear()} {marca.nome}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
