import React from 'react';
import Navbar from './components/navbar/navbar';
import DigitalSolution from './components/hero/digitalSolution';
import ServicesSection from './components/serviceCard';
import HowWeWorkSection from './components/howWeWorkSection';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <DigitalSolution />
      <ServicesSection />
      <HowWeWorkSection />

    </div>
  );
};

export default App;