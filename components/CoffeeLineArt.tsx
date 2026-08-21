/**
 * Desenho de um café (xícara + vapor) sendo traçado em linha, em loop.
 * Puro CSS/SVG — funciona sem JavaScript e desliga sozinho com
 * prefers-reduced-motion (ver regra em globals.css).
 * pathLength="100" normaliza o comprimento de cada traço para 100 unidades,
 * o que deixa stroke-dasharray/dashoffset previsíveis em qualquer path.
 */
export default function CoffeeLineArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 230"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* pires */}
      <ellipse
        className="traco-linha"
        cx="150"
        cy="182"
        rx="86"
        ry="13"
        pathLength={100}
        style={{ ["--d" as any]: "0ms" }}
      />

      {/* corpo da xícara */}
      <path
        className="traco-linha"
        pathLength={100}
        style={{ ["--d" as any]: "320ms" }}
        d="M92,96 C90,124 90,150 100,166 C108,178 192,178 200,166
           C210,150 210,124 208,96"
      />
      {/* boca da xícara */}
      <ellipse
        className="traco-linha"
        cx="150"
        cy="96"
        rx="58"
        ry="11"
        pathLength={100}
        style={{ ["--d" as any]: "160ms" }}
      />

      {/* alça */}
      <path
        className="traco-linha"
        pathLength={100}
        style={{ ["--d" as any]: "680ms" }}
        d="M206,112 C246,102 248,158 206,150"
      />

      {/* vapor - tres tracos ondulados */}
      <path
        className="traco-linha traco-vapor"
        pathLength={100}
        style={{ ["--d" as any]: "980ms" }}
        d="M122,84 C112,66 130,56 120,38 C110,20 128,12 120,-2"
      />
      <path
        className="traco-linha traco-vapor"
        pathLength={100}
        style={{ ["--d" as any]: "1120ms" }}
        d="M150,80 C140,60 158,50 148,30 C138,10 156,0 148,-16"
      />
      <path
        className="traco-linha traco-vapor"
        pathLength={100}
        style={{ ["--d" as any]: "1260ms" }}
        d="M178,84 C168,66 186,56 176,38 C166,20 184,12 176,-2"
      />

      {/* grao de cafe, acento solto */}
      <path
        className="traco-linha traco-vapor"
        pathLength={100}
        style={{ ["--d" as any]: "1480ms" }}
        d="M44,168 C34,158 34,142 44,132 C54,122 70,122 80,132
           C90,142 90,158 80,168 C70,178 54,178 44,168 Z
           M62,124 C62,140 62,158 62,176"
      />
    </svg>
  );
}
