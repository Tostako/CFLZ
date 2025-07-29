import React from 'react';
import logo from '../../assets/logoAbreviado.png';

import { Facebook, Instagram, MessageCircle, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <div className="">
            <footer className="bg-yellow-600 text-white relative overflow-hidden mt-auto border-t border-white/20">
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-opacity-10" style={{ backgroundColor: '#121418' }}></div>
                {/* Contenido del footer */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex items-center space-x-2">
                        <img src={logo} alt="Logo" className="h-18 w-auto" />
                    </div>
                    <div className="flex items-center space-x-6">
                        <a href="https://www.facebook.com/share/1JLzAEJcoL/?mibextid=wwXIfr" className="flex items-center space-x-2 hover:scale-105  transition-transform duration-300 text-sm font-medium hover:text-[#b89563]">
                            <Facebook size={20} />
                            <span className="font-Montserrat-semi-bold  hidden sm:inline">Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/element.haus?igsh=Z2wwcW14dDdxODJl" className="flex items-center space-x-2 hover:scale-105  transition-transform duration-300 text-sm font-medium hover:text-[#b89563]"  >
                            <Instagram size={20} />
                            <span className="font-Montserrat-semi-bold hidden sm:inline">Instagram</span>
                        </a>
                        <a href="https://wa.me/c/573184575744" className="font-Montserrat-semi-bold flex items-center space-x-2 hover:scale-105  transition-transform duration-300 text-sm font-medium hover:text-[#b89563]">
                            <MessageCircle size={20} />
                            <span className="hidden sm:inline">WhatsApp</span>
                        </a>
                        <a href="#" className="font-Montserrat-semi-bold flex items-center space-x-2 hover:scale-105  transition-transform duration-300 text-sm font-medium hover:text-[#b89563]">
                            <Linkedin size={20} />
                            <span className="hidden sm:inline">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
