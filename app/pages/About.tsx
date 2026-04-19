import { Camera, Award, Users } from "lucide-react";

export function About() {
  const stats = [
    { icon: Camera, label: "Projetos", value: "500+" },
    { icon: Award, label: "Prêmios", value: "15" },
    { icon: Users, label: "Clientes Satisfeitos", value: "200+" },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Sobre Mim</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transformando momentos em memórias através da lente
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1697238724718-29cc8b1a2340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2FtZXJhJTIwZmlsbXxlbnwxfHx8fDE3NzU4MDQwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Equipamento fotográfico"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl mb-6">Minha Jornada</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Sou um fotógrafo apaixonado com mais de 10 anos de experiência
                capturando momentos únicos e contando histórias visuais. Meu
                trabalho reflete uma busca constante pela perfeição e pela
                emoção genuína.
              </p>
              <p>
                Especializado em fotografia de retratos, paisagens e urbana,
                acredito que cada imagem deve contar uma história e evocar
                emoções. Meu estilo combina técnicas clássicas com uma visão
                contemporânea.
              </p>
              <p>
                Ao longo da minha carreira, tive o privilégio de trabalhar com
                clientes de diversos segmentos, desde campanhas publicitárias
                até eventos pessoais inesquecíveis.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20 py-16 border-y border-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon size={40} className="text-white" />
              </div>
              <div className="text-4xl mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Serviços</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Ofereço uma gama completa de serviços fotográficos para atender
            suas necessidades
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Retratos",
                description:
                  "Sessões de retratos profissionais e artísticos que capturam sua essência",
              },
              {
                title: "Eventos",
                description:
                  "Cobertura completa de casamentos, aniversários e eventos corporativos",
              },
              {
                title: "Comercial",
                description:
                  "Fotografia de produtos e campanhas publicitárias de alta qualidade",
              },
              {
                title: "Paisagens",
                description:
                  "Fotografias de natureza e paisagens que celebram a beleza do mundo",
              },
              {
                title: "Arquitetura",
                description:
                  "Documentação profissional de projetos arquitetônicos e espaços",
              },
              {
                title: "Editorial",
                description:
                  "Trabalhos editoriais para revistas, books e portfólios",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
