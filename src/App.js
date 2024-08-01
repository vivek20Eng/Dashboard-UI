import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Chart from './components/Chart';
import CardBanner from './components/CardBanner';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className={`flex transition-all duration-200  w-full`}>
      <Sidebar open={drawerOpen} onClose={handleDrawerClose} />
      <div className={`flex-1 bg-[#1a1a27] p-6 transition-all duration-300`}>
        <Navbar onMenuClick={handleDrawerOpen} />
        <div className="grid grid-cols-3 gap-5 mt-16">
          <div className="col-span-3  p-5 rounded-lg">
            <Chart />
          </div>
          <div className="col-span-3 p-5 rounded-lg">
            <CardBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
