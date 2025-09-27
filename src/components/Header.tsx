import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Decoração", href: "/decoracao" },
    { name: "Limpeza", href: "/limpeza" },
    { name: "Organização", href: "/organizacao" },
    { name: "Promoções", href: "/promocoes" },
    { name: "Sobre Nós", href: "/sobre" },
  ];

  return (
    <header className="w-full">
      {/* Barra promocional */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4 text-sm font-medium">
        🚚 ENTREGAMOS PARA TODO O BRASIL • PROMOÇÃO: Frete Grátis a partir de R$ 250
      </div>

      {/* Header principal */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">M</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Magia</h1>
                  <p className="text-xs text-muted-foreground -mt-1">da Cozinha</p>
                </div>
              </div>
            </div>

            {/* Navegação desktop */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Barra de busca e ações */}
            <div className="flex items-center space-x-4">
              {/* Busca */}
              <div className="hidden sm:flex items-center bg-muted rounded-lg px-3 py-2 w-64">
                <Search className="h-4 w-4 text-muted-foreground mr-2" />
                <Input
                  type="search"
                  placeholder="os melhores produtos para cozinha..."
                  className="border-0 bg-transparent placeholder:text-muted-foreground focus-visible:ring-0 text-sm"
                />
              </div>

              {/* Carrinho */}
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>

              {/* Menu mobile */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Menu mobile */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                {/* Busca mobile */}
                <div className="flex items-center bg-muted rounded-lg px-3 py-2">
                  <Search className="h-4 w-4 text-muted-foreground mr-2" />
                  <Input
                    type="search"
                    placeholder="Buscar produtos..."
                    className="border-0 bg-transparent placeholder:text-muted-foreground focus-visible:ring-0 text-sm"
                  />
                </div>
                
                {/* Navegação mobile */}
                <nav className="flex flex-col space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;