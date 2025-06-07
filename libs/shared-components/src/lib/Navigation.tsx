import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <header className="p-4 bg-gray-600 flex text-white">
      <nav className="space-x-2">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Navigation;
