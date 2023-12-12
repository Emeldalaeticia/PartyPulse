import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 opacity-75 py-4 text-center">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} PartyPulse. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
