import React from 'react';
import Navbar from './components/navbar/navbar';
import DigitalSolution from './components/hero/digitalSolution';
import ServicesSection from './components/serviceCard';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <DigitalSolution />
      <ServicesSection />

    </div>
  );
};

export default App;