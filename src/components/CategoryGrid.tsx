import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: "Tábuas de Corte",
      description: "Tábuas duráveis e higiênicas",
      image: "https://images.unsplash.com/photo-1556908114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80",
      href: "/categoria/tabuas"
    },
    {
      id: 2,
      name: "Utensílios de Limpeza",
      description: "Facilite sua limpeza diária",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80",
      href: "/categoria/limpeza"
    },
    {
      id: 3,
      name: "Ganchos e Suportes",
      description: "Organização inteligente",
      image: "https://images.unsplash.com/photo-1586627488096-a4c6ab7c0dd9?auto=format&fit=crop&w=400&q=80",
      href: "/categoria/ganchos"
    },
    {
      id: 4,
      name: "Dispensadores",
      description: "Praticidade no dia a dia",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
      href: "/categoria/dispensadores"
    },
    {
      id: 5,
      name: "Acessórios Café",
      description: "Para os amantes do café",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80",
      href: "/categoria/cafe"
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Explore Nossas Categorias
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Encontre exatamente o que você precisa para sua cozinha
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category) => (
            <Card key={category.id} className="group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-hero transition-all duration-300 bg-card">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-200"
                >
                  Ver Produtos
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;