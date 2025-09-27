import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Kit Dispensador de Óleo e Vinagre",
      originalPrice: "R$ 89,90",
      salePrice: "R$ 67,90",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      reviews: 124,
      badge: "PROMOÇÃO"
    },
    {
      id: 2,
      name: "Tábua de Corte Bambu Premium",
      originalPrice: "R$ 159,90",
      salePrice: "R$ 119,90",
      image: "https://images.unsplash.com/photo-1556908114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      reviews: 89,
      badge: "MAIS VENDIDO"
    },
    {
      id: 3,
      name: "Esponja Dupla Face Kit 6 Unidades",
      originalPrice: "R$ 24,90",
      salePrice: "R$ 19,90",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80",
      rating: 4.6,
      reviews: 203,
      badge: "OFERTA"
    },
    {
      id: 4,
      name: "Suporte Multiuso Parede",
      originalPrice: "R$ 45,90",
      salePrice: "R$ 34,90",
      image: "https://images.unsplash.com/photo-1586627488096-a4c6ab7c0dd9?auto=format&fit=crop&w=400&q=80",
      rating: 4.7,
      reviews: 156,
      badge: "NOVO"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Produtos em Destaque
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Os mais procurados pelos nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-hero transition-all duration-300 bg-card">
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Badge */}
                <Badge 
                  className="absolute top-2 left-2 bg-primary text-primary-foreground font-medium"
                >
                  {product.badge}
                </Badge>

                {/* Botão favorito */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                  {product.name}
                </h3>

                {/* Avaliação */}
                <div className="flex items-center mb-2">
                  <div className="flex text-warning">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "fill-current" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-1">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Preços */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-lg font-bold text-primary">
                    {product.salePrice}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Comprar Agora
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;