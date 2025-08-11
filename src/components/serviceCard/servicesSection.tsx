import React from 'react';


interface ServiceCardData {
  category: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isFeatured?: boolean;
}

interface StatData {
  value: string;
  label: string;
}


// --- Componente da Nova Seção de Serviços ---
const ServicesSection: React.FC = () => {
  // Dados para os cards de serviço
  const services: ServiceCardData[] = [
    {
      category: 'Visual Branding',
      title: 'Web Design And Development',
      description: "Established in 1995, NEXIN Has Been A Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16M8 4l4 4 4-4M8 20l4-4 4 4"></path></svg>,
    },
    {
      category: 'Brand Strategy',
      title: 'Branding And Creative Services',
      description: "Established in 1995, NEXIN Has Been A Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 8.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm0 0v7m-5-7h5m2.5 7a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zm0 0V8.5m5 7h-5"></path></svg>,
      isFeatured: true,
    },
    {
      category: 'Identity Guild',
      title: 'Creative Digital Agency',
      description: "Established in 1995, NEXIN Has Been A Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h7"></path></svg>,
    },
  ];

  // Dados para as estatísticas
  const stats: StatData[] = [
    { value: '35k+', label: 'Project Complete' },
    { value: '10k+', label: 'Happy Customers' },
    { value: '25+', label: 'Years Experiences' },
    { value: '88', label: 'Awards Achievement' },
  ];

  return (
    <section className="font-sans bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-16">
          
          {/* Cabeçalho da Seção */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute -left-24 -top-8 hidden lg:block">
               <svg className="w-20 h-20 text-gray-300 animate-spin-slow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L61.226 23.4315L85.3553 29.2893L70.1756 48.1685L76.5685 72.8115L50 62.5L23.4315 72.8115L29.8244 48.1685L4.64466 29.2893L38.774 23.4315L50 0Z" fill="currentColor"/>
              </svg>
            </div>
            <p className="text-sm font-semibold text-gray-500 tracking-widest mb-2">SERVICES</p>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Empowering Brands Through Strategic Digital Services</h2>
            <p className="text-gray-600">
              Established In 1995, NEXIN Has Been A Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate Team Of Designers.
            </p>
          </div>

          {/* Grid de Cards de Serviço */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group bg-white p-8 rounded-lg text-left transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 ${service.isFeatured ? 'border-2 border-lime-400' : 'border border-gray-200'}`}
              >
                <p className="text-xs font-semibold text-gray-400 mb-2">• {service.category}</p>
                <h3 className="font-serif text-2xl text-gray-800 mb-4">{service.title}</h3>
                <div className="text-gray-600 mb-6">{service.icon}</div>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{service.description}</p>
                <div className="flex justify-end">
                  <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${service.isFeatured ? 'bg-lime-400 text-white' : 'bg-gray-100 group-hover:bg-lime-400 group-hover:text-white'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5-5 5M6 12h12"></path></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Seção de Estatísticas */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 pt-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4">
                <div className="w-40 h-40 rounded-full border border-gray-300 flex flex-col items-center justify-center text-center">
                  <p className="font-serif text-4xl text-gray-800">{stat.value}</p>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;