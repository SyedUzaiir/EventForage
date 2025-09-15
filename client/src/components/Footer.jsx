import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-500 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">Contact</a>
          <a href="#" className="text-gray-500 hover:text-gray-900">Terms of Service</a>
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2025 EventForge. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

