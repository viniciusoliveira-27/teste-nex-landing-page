import React from 'react';
import Navbar from './components/navbar/navbar';
import DigitalSolution from './components/digitalSolution/digitalSolution';
import ServicesSection from './components/serviceCard';
import HowWeWorkSection from './components/howWeWorkSection';
import DigitalSuccessSection from './components/digitalSuccess';
import CtaSection from './components/ctaSection';
import Footer from './components/footer';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <DigitalSolution />
      <ServicesSection />
      <HowWeWorkSection />
      <DigitalSuccessSection />
      <CtaSection />
      <Footer />

    </div>
  );
};

export default App;