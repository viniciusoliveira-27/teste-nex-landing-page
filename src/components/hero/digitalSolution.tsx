import React from 'react';

interface ReviewData {
  rating: number;
  count: string;
}

const DigitalSolution: React.FC = () => {
  const reviewData: ReviewData = {
    rating: 5,
    count: '4,500+'
  };

  const partnerLogos = [
    { icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M9 3L6 6L3 9M4.5 7.5L9 12M15 3L18 6L21 9M19.5 7.5L15 12M9 21L6 18L3 15M4.5 16.5L9 12M15 21L18 18L21 15M19.5 16.5L15 12M12 9V15" /></svg>, name: 'TECH LOGO', slogan: 'SLOGAN TRID HERE' },
    { icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M22 12h-2M4 12H2M19.07 4.93l-1.42 1.42M6.34 17.66l-1.42 1.42M19.07 19.07l-1.42-1.42M6.34 6.34l-1.42-1.42" /></svg>, name: 'TECHNOLOGY', slogan: 'SLOGANHERE' },
    { icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.21-.714 4.285-1.95 6.05L12 22z" /><path d="M12 12m-4 0a4 4 0 108 0 4 4 0 10-8 0" /></svg>, name: 'TECHNOLOGY', slogan: 'SLOGANHERE' },
    { icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="9" /></svg>, name: 'TECHNOLOGY', slogan: 'SLOGANHERE' },
    { icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>, name: 'SYSTEM', slogan: '' },
  ];

  return (
    <>
      {/* DigitalSolution Section - Texto e CTA */}
      <section className="relative bg-gray-50 py-20 lg:py-28">
        {/* Adicionando a fonte Gallery Modern */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600&display=swap');
          
          .font-serif {
            font-family: 'Playfair Display', serif;
          }

          .font-sans {
            font-family: 'Inter', sans-serif;
          }
        `}</style>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {/* Linha 1: Título "Digital" e conteúdo à direita */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Coluna Esquerda: Título "Digital" */}
              <div className="flex flex-col">
                <p className="font-sans text-sm text-gray-500 font-medium">Great Design Services</p>
                <p className="font-sans text-sm text-gray-500 font-medium mb-4">Without The Instantiousness!</p>
                <h1 className="font-serif text-8xl md:text-9xl lg:text-[140px] text-gray-900 leading-none">
                  Digital
                </h1>
              </div>

              {/* Coluna Direita: Parágrafo, Avaliações e CTA */}
              <div className="flex flex-col gap-6 self-end">
                <p className="font-sans text-gray-600 leading-relaxed max-w-md">
                  We Believe That The Surest Measure Of Success Is When Our Partners With Us More Than Half It's More Than Just The Visuals, We're Here To Support Your Growth.
                </p>
                <div className="flex items-center gap-4">
                  {/* Avatares dos Clientes */}
                  <div className="flex items-center">
                    <div className="flex -space-x-3">
                      <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://placehold.co/40x40/f97316/ffffff?text=A" alt="Reviewer 1" />
                      <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://placehold.co/40x40/14b8a6/ffffff?text=B" alt="Reviewer 2" />
                      <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://placehold.co/40x40/8b5cf6/ffffff?text=C" alt="Reviewer 3" />
                    </div>
                  </div>
                  {/* Informações da Avaliação */}
                  <div className="flex flex-col">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: reviewData.rating }).map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                      ))}
                    </div>
                    <p className="font-sans text-sm text-gray-600 font-medium">
                      Excellent {reviewData.count} Reviews
                    </p>
                  </div>
                </div>
                <a href="#" className="font-sans text-lime-500 hover:text-lime-600 transition-colors duration-200 font-semibold inline-flex items-center gap-2">
                  View All Services
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>


            {/* Web Design badge + Solution ocupando a linha inteira */}
            <div className="flex items-center gap-6 lg:gap-8">
              <div className="flex-shrink-0 bg-lime-300 rounded-2xl p-2 flex items-center justify-center">
                {/* Ícone de Web Design (mantido o placeholder que você usará) */}
                <img
                  src="/images/web-design.svg"
                  alt="Web Design Icon"
                  className="h-24 w-auto"
                />
              </div>
              <h1 className="font-serif text-8xl md:text-9xl lg:text-[140px] text-gray-900 leading-none">
                Solution
              </h1>
            </div>
          </div>
        </div>

      </section >

      {/* Workspace Image - Full Width */}
      < section className="relative" >
        <div className="w-full">
          <img
            src="/images/workspace-image.svg"
            alt="Digital workspace - team working on laptops"
            className="w-full h-96 lg:h-[500px] object-cover"
          />
        </div>

      </section >

      <section className="font-sans bg-[#111111] text-gray-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {/* Linha superior: Título e ícone decorativo */}
            <div className="flex justify-between items-start">
              <h3 className="text-2xl md:text-3xl font-light leading-snug max-w-3xl">
                We Collaborate With A Few Disability Service Providers To Create Inclusive Goods That Meet Their Requirements.
              </h3>
              {/* Ícone decorativo de círculos */}
              <div className="hidden md:block">
                <svg className="w-16 h-16 text-gray-600" fill="none" viewBox="0 0 60 60">
                  <circle cx="20" cy="30" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
                  <circle cx="40" cy="30" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"></circle>
                </svg>
              </div>
            </div>

            {/* Linha inferior: Estatísticas e links */}
            <div className="grid md:grid-cols-3 gap-12 items-start">
              {/* Coluna 1: Anos de Experiência */}
              <div className="flex flex-col gap-2">
                <p className="text-5xl font-bold text-white">25+</p>
                <p className="text-gray-400">Years Of Experience</p>
              </div>

              {/* Coluna 2: Sobre Nós */}
              <div className="flex flex-col gap-4">
                <p className="leading-relaxed text-gray-400">
                  Established in 1995, NEXIN Has Been A Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate Team Of Designers.
                </p>
                <a href="#" className="font-semibold text-white hover:text-lime-400 transition-colors inline-flex items-center gap-2">
                  More About Us 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
              
              {/* Coluna 3: Contato */}
              <div className="flex flex-col gap-4">
                 <p className="leading-relaxed text-gray-400">
                  Established in 1995, NEXIN Has Been A Leading Force In The Digital Landscape For Over Two Decades. We're A Passionate Team Of Designers.
                </p>
                <a href="#" className="font-semibold text-white hover:text-lime-400 transition-colors inline-flex items-center gap-2">
                  Get In Touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Seção de Logos dos Parceiros ATUALIZADA --- */}
      <section className="font-sans bg-[#111111] text-gray-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12">
            <p className="text-center">We Worked With Global Largest Brands</p>
            {/* Linha divisória */}
            <div className="w-full border-t border-gray-700"></div>
            {/* Grid de Logos */}
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-8 items-center justify-items-center">
              {partnerLogos.map((logo, index) => (
                <div key={index} className="flex items-center gap-4 text-gray-500 hover:text-white transition-colors">
                  {logo.icon}
                  <div className="flex flex-col">
                    <span className="font-bold text-lg tracking-wider">{logo.name}</span>
                    {logo.slogan && <span className="text-xs tracking-widest">{logo.slogan}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalSolution;