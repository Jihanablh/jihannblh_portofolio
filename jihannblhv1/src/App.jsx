import React from 'react';
// Import file portofolio kamu dari folder components
import AnalystPortfolio from './components/Portofolio'; 

function App() {
  return (
    <div className="w-full h-screen">
      {/* Panggil komponennya di sini */}
      <AnalystPortfolio />
    </div>
  );
}

export default App;