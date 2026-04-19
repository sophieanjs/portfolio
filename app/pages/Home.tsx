import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function Home() {
  const featuredImages = [
    {
      url: "https://images.unsplash.com/photo-1637271200729-0f5e266a3062?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5JTIwd29tYW58ZW58MXx8fHwxNzc1ODM0NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Retratos",
    },
    {
      url: "https://images.unsplash.com/photo-1616386573884-22531fd226e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBtb3VudGFpbiUyMG5hdHVyZXxlbnwxfHx8fDE3NzU3NjA2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Paisagens",
    },
    {
      url: "https://images.unsplash.com/photo-1655097775175-f6718e1395d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNpdHklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc1ODM0MDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Urbano",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1612431318619-9abdb218253b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMHNreSUyMHN0YXJzJTIwbWlsa3klMjB3YXl8ZW58MXx8fHwxNzc1NzkxNDA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
            Capturando Momentos
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Fotografia que conta histórias e eterniza memórias
          </p>
          <Link
            to="/galeria"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 hover:bg-gray-200 transition-colors"
          >
            Ver Galeria
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">
            Trabalhos em Destaque
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredImages.map((image, index) => (
              <Link
                key={index}
                to="/galeria"
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl">{image.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Vamos criar algo incrível juntos
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Entre em contato para discutir seu próximo projeto
          </p>
          <Link
            to="/contato"
            className="inline-block bg-white text-black px-8 py-3 hover:bg-gray-200 transition-colors"
          >
            Entrar em Contato
          </Link>
        </div>
      </section>
    </div>
  );
}
