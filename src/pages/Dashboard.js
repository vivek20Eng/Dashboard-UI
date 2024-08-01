import React, { useState } from 'react';
import Chart from '../components/Chart';
import CardBanner from '../components/CardBanner';
function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 mt-6">
          <div className="col-span-3  p-5 rounded-lg">
            <Chart />
          </div>
          <div className="col-span-3 p-5 rounded-lg">
            <CardBanner />
          </div>
        </div>
    </div>
  )
}

export default Dashboard
