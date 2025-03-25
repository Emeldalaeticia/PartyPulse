import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationSidebar from './NavigationSidebar'; // Sidebar component for dashboard
import DashboardMain from './DashboardMain'; // Main dashboard component

const DashboardLayout = () => {
  return (
    <>
        <div className="flex h-screen">
          <NavigationSidebar />
          <div className="flex-grow p-8">
            <Routes> 
              <Route index element={<DashboardMain />} />
              {/* Add routes for different dashboard sections */}
            </Routes>
            
          </div>
        </div>
    
    </>
  );
};

export default DashboardLayout;
