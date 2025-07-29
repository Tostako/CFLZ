import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logoB.png';
import { useNavigate } from "react-router-dom";

// src/main.jsx o src/App.jsx



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

   const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" shadow-lg" style={{ backgroundColor: '#121418' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div onClick={() => navigate("/")} className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="h-14 w-auto" />
                <h2 className= "font-Montserrat-semi-bold  text-xl text-gray-100" >ELEMENT</h2>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                onClick={() => scrollToSection('nosotros')}
                className=" font-Montserrat-semi-bold text-gray-200 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                NOSOTROS
              </a>
              <a
                onClick={() => scrollToSection('proyectos')}
                className="font-Montserrat-semi-bold text-gray-200 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                PROYECTOS
              </a>
              <a
                onClick={() => scrollToSection('servicios')}
                className="font-Montserrat-semi-bold text-gray-200 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                SERVICIOS
              </a>
              
              <a
                onClick={() => scrollToSection('contacto')}
                className="font-Montserrat-semi-bold text-gray-200 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                CONTACTO
              </a>
            </div>
          </div>


          <div className="hidden md:block">
            <a  href="https://wa.me/c/573184575744" className="font-Montserrat-semi-bold   text-white hover:text-black px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg " style={{ backgroundColor: '#b89563' , hover: { backgroundColor: '#a67c4f' } }}>
              CONTACTANOS
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 " style={{ backgroundColor: '#121418' }}>
            <a
              href="#nosotros"
              className="text-gray-200 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              NOSOTROS
            </a>
            <a
              href="#proyectos"
              className="text-gray-200 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              PROYECTOS
            </a>
            <a
              href="#servicios"
              className="text-gray-200 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => scrollToSection('proyectos')}
            >
              SERVICIOS
            </a>
            <a
              href="#contacto"
              className="text-gray-200 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
              onClick={() => scrollToSection('contacto')}
            >
              CONTACTO
            </a>
            <div className="px-3 py-2">
              <button className="w-full text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 shadow-md" style={{backgroundColor: '#b89563', hover: { backgroundColor: '#a67c4f' } }}>
                CONTACTANOS
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;