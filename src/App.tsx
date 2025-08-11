import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

    </div>
  );
};

export default App;