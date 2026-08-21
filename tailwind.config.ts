import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "marrom-escuro": "#24150F",
        "marrom-chocolate": "#332119",
        dourado: "#D7A63E",
        "dourado-claro": "#EFC76C",
        "bege-claro": "#E8D7BE",
        "branco-quente": "#F7F1E8",
        "cinza-bege": "#CBBEAE",
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
