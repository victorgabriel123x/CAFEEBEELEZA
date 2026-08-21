import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // paleta rosa-e-dourado (vinho profundo + dourado da marca + rosa)
        "marrom-escuro": "#3A1620",
        "marrom-chocolate": "#4E1E2C",
        dourado: "#D7A63E",
        "dourado-claro": "#E6A6A0",
        "bege-claro": "#F1DBD8",
        "branco-quente": "#FBEEEB",
        "cinza-bege": "#DDB6B7",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        conteudo: "72rem",
      },
      borderRadius: {
        suave: "20px",
        macia: "28px",
      },
    },
  },
  plugins: [],
};

export default config;
