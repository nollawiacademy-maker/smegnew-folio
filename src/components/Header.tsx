import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`relative font-medium text-lg text-white transition-colors hover:text-gray-300 ${
        isActive ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white' : ''
      }`}>
      {children}
    </Link>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">Smegnew</Link>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-70">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}