import React, { useState, useEffect } from "react";
import Navbar from "./components/ui/navbar";
import imagen from "./assets/casa.jpg";
import { Parallax } from 'react-parallax';
import {AppleCardsCarouselDemo} from "./components/features/carouselapple";
import Footer from "./components/ui/footer";
import logo from './assets/logoAbreviado.png';


// Hook personalizado para detectar scroll optimizado
const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollToSection };
};

function App() {
  const { scrollY, scrollToSection } = useScrollPosition();

  // Calcula el offset del texto basado en el scroll
  const textOffset = scrollY * 0.25; // Ajusta este valor para cambiar la velocidad
  const textOpacity = Math.max(0, 1 - scrollY / 400); // El texto se desvanece después de 400px de scroll

  return (
    <div style={{ backgroundColor: '#121418' }}>
      {/* Navbar Fijo */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar scrollToSection={scrollToSection} />
      </div>

      {/* Primer Parallax */}
      <Parallax
        blur={1}
        bgImage={imagen}
        bgImageAlt="Casa parallax background"
        strength={-100}
        className="min-h-screen relative"
      >
        <div
          className="flex flex-col items-center justify-center min-h-screen px-4 text-center absolute inset-0 text-white"
          style={{
            transform: `translateY(-${textOffset}px)`,
            opacity: textOpacity,
          }}
        >
          <div id="nosotros">
            <img src={logo} alt="Logo" className="h-32 w-auto" />
          </div>
        </div>
      </Parallax>

      {/* Contenido adicional */}
      <div id="proyectos" className="min-h-screen p-8 relative overflow-hidden" style={{ backgroundColor: '#121418' }}>
        <div
          className="max-w-4xl mx-auto"
          style={{
            transform: `translateY(${Math.max(0, (scrollY - 500) * -0.3)}px)`,
            opacity: Math.min(1, Math.max(0, (scrollY - 300) / 200)),
          }}
        >
          <div className="flex flex-col items-center mt-8 space-y-8">
            
            <AppleCardsCarouselDemo />
          </div>
        </div>
      </div>

      {/* Sección Servicios (opcional) */}
      <div id="servicios" className="min-h-screen p-8 relative overflow-hidden" style={{ backgroundColor: '#121418' }}>
        <div
          className="max-w-4xl mx-auto"
          style={{
            transform: `translateY(${Math.max(0, (scrollY - 1000) * -0.2)}px)`,
            opacity: Math.min(1, Math.max(0, (scrollY - 800) / 200)),
          }}
        >
          <div className="flex flex-col items-center mt-8 space-y-8">
            <h1 className="font-Montserrat-semi-bold text-5xl text-center" style={{ color: '#f5f4f0' }}>
              Servicios
            </h1>
            {/* Aquí puedes agregar tu contenido de servicios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <div className="bg-[#2a2f36] p-6 rounded-lg text-center">
                <h3 className="text-[#b89563] text-xl font-semibold mb-4">Diseño Web</h3>
                <p className="text-[#f5f4f0]">Creamos diseños modernos y funcionales</p>
              </div>
              <div className="bg-[#2a2f36] p-6 rounded-lg text-center">
                <h3 className="text-[#b89563] text-xl font-semibold mb-4">Desarrollo</h3>
                <p className="text-[#f5f4f0]">Desarrollamos aplicaciones robustas</p>
              </div>
              <div className="bg-[#2a2f36] p-6 rounded-lg text-center">
                <h3 className="text-[#b89563] text-xl font-semibold mb-4">Consultoría</h3>
                <p className="text-[#f5f4f0]">Asesoramos en soluciones digitales</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Segundo Parallax */}
      <Parallax
        blur={1}
        bgImage={imagen}
        bgImageAlt="Casa parallax background"
        strength={-100}
        className="min-h-screen relative"
      >
        <div id="contacto" className="flex flex-col items-center justify-center min-h-screen px-4 text-center absolute inset-0 text-white">
          <h1 className="font-Montserrat-semi-bold text-4xl md:text-6xl font-bold">
            ESTO ES ELEMENT
          </h1>
          <p className="font-Montserrat-semi-bold text-lg md:text-xl mt-2">
            INNOVACIÓN, EXCELENCIA, LIDERAZGO.
          </p>
          <a
            href="https://wa.me/c/573184575744"
            className="font-Montserrat-semi-bold mt-4 bg-[#b89563] text-white px-4 py-2 rounded-full hover:bg-[#a08556] transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
}

export default App;