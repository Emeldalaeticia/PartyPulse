import React from 'react';
import { Link } from 'react-router-dom';

const NavigationSidebar = () => {
  // Navigation links for different dashboard sections
  return (
    <div className="bg-gray-200 w-64 p-4">
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        {/* Add links for other dashboard sections */}
      </ul>
    </div>
  );
};

export default NavigationSidebar;
