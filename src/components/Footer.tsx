import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerSections = [
    {
      title: "Categorias",
      links: [
        { name: "Decoração", href: "/decoracao" },
        { name: "Limpeza", href: "/limpeza" },
        { name: "Organização", href: "/organizacao" },
        { name: "Utensílios", href: "/utensilios" },
        { name: "Promoções", href: "/promocoes" }
      ]
    },
    {
      title: "Atendimento",
      links: [
        { name: "Fale Conosco", href: "/contato" },
        { name: "Rastrear Pedido", href: "/rastrear" },
        { name: "Trocas e Devoluções", href: "/trocas" },
        { name: "Perguntas Frequentes", href: "/faq" },
        { name: "Política de Privacidade", href: "/privacidade" }
      ]
    },
    {
      title: "Sobre Nós",
      links: [
        { name: "Nossa História", href: "/sobre" },
        { name: "Trabalhe Conosco", href: "/vagas" },
        { name: "Sustentabilidade", href: "/sustentabilidade" },
        { name: "Imprensa", href: "/imprensa" },
        { name: "Blog", href: "/blog" }
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter */}
      <div className="bg-gradient-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Receba nossas ofertas especiais
          </h3>
          <p className="text-primary-foreground/80 mb-6 text-lg">
            Seja o primeiro a saber sobre promoções e novidades
          </p>
          <div className="max-w-md mx-auto flex space-x-2">
            <Input
              type="email"
              placeholder="Seu e-mail"
              className="bg-white text-foreground border-0 flex-1"
            />
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Inscrever
            </Button>
          </div>
        </div>
      </div>

      {/* Footer principal */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo e informações */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">M</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-background">Magia</h1>
                  <p className="text-xs text-background/70 -mt-1">da Cozinha</p>
                </div>
              </div>
              <p className="text-background/80 mb-6 text-sm leading-relaxed">
                Transformamos sua cozinha com produtos de qualidade, 
                praticidade e design. Desde 2020 levando magia para 
                milhares de lares brasileiros.
              </p>
              
              {/* Contato */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-background/80">(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-background/80">contato@magiadacozinha.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-background/80">São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>

            {/* Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold text-background mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-background/70 hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Redes sociais e pagamento */}
          <div className="border-t border-background/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className="text-background/80 text-sm">Siga-nos:</span>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                    <Facebook className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-background/60 text-sm">
                  © 2024 Magia da Cozinha. Todos os direitos reservados.
                </p>
                <p className="text-background/60 text-xs mt-1">
                  Pagamento seguro | Entrega garantida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;