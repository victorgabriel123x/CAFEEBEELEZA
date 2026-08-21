import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Destaques from "@/components/Destaques";
import Galeria from "@/components/Galeria";
import Localizacao from "@/components/Localizacao";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppFlutuante from "@/components/WhatsAppFlutuante";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Destaques />
        <Galeria />
        <Localizacao />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </>
  );
}
