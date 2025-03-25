import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationSidebar from './NavigationSidebar';
import DashboardMain from './DashboardMain';
import { FiMenu } from 'react-icons/fi';

const DashboardLayout = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile header */}
      <div className="md:hidden flex items-center p-4 bg-white shadow-sm">
        <button 
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="mr-4 p-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          <FiMenu size={24} />
        </button>
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar - hidden on mobile unless toggled */}
        <div className={`${mobileSidebarOpen ? 'block' : 'hidden'} md:block md:w-72`}>
          <NavigationSidebar />
        </div>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
          <Routes>
            <Route index element={<DashboardMain />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;