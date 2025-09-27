import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kitchen.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">VARIEDADE E</span>{" "}
                <span className="block text-primary-foreground xl:inline">QUALIDADE</span>
              </h1>
              <p className="mt-3 text-base text-white/90 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Tudo o que você{" "}
                <span className="font-semibold">precisa</span> para sua cozinha
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow-hero">
                  <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-bold px-8 py-4 text-lg">
                    VER PRODUTOS
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Imagem hero */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={heroImage}
          alt="Produtos de cozinha de qualidade - Magia da Cozinha"
        />
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default HeroSection;