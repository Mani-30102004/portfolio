import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ scrollToHome, scrollToProjects, scrollToCertifications, scrollToContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Pabba Mani Guptha
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={scrollToHome} className="nav-link text-gray-800 hover:text-indigo-600 font-medium">
              Home
            </button>
            <button onClick={scrollToProjects} className="nav-link text-gray-800 hover:text-indigo-600 font-medium">
              Projects
            </button>
            <button onClick={scrollToCertifications} className="nav-link text-gray-800 hover:text-indigo-600 font-medium">
              Certifications
            </button>
            <button onClick={scrollToContact} className="nav-link text-gray-800 hover:text-indigo-600 font-medium">
              Contact
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-4 px-2 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  scrollToHome();
                  setIsMenuOpen(false);
                }} 
                className="text-gray-800 hover:text-indigo-600 font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  scrollToProjects();
                  setIsMenuOpen(false);
                }} 
                className="text-gray-800 hover:text-indigo-600 font-medium py-2"
              >
                Projects
              </button>
              <button 
                onClick={() => {
                  scrollToCertifications();
                  setIsMenuOpen(false);
                }} 
                className="text-gray-800 hover:text-indigo-600 font-medium py-2"
              >
                Certifications
              </button>
              <button 
                onClick={() => {
                  scrollToContact();
                  setIsMenuOpen(false);
                }} 
                className="text-gray-800 hover:text-indigo-600 font-medium py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;