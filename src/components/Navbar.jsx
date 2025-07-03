import React, { useState } from "react";

const Navbar = ({ projectsRef, experienceRef, skillsRef, aboutMeRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // cierra menú en mobile al hacer click
    }
  };

  return (
    <>
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
          .text-pink-civitatis-hover:hover {
            color: #E91E63;
          }
          .border-pink-civitatis {
            border-color: #E91E63;
          }
          .hover\\:bg-pink-civitatis:hover {
            background-color: #E91E63;
          }
          .hover\\:text-gray-900:hover {
            color: #1a202c;
          }
        `}
      </style>

      <nav className="fixed top-0 left-0 right-0 z-50 text-white py-4 pt-6 bg-gray-900">
        <div className="max-w-[900px] mx-auto px-6 flex justify-between items-center">
          <div
            className="text-lg font-bold mr-12 cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsOpen(false);
            }}
          >
            Rocío - Portfolio
          </div>

          {/* Botón hamburguesa solo en móvil */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                // Icono "X" cuando está abierto
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Icono hamburguesa cuando está cerrado
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Menú desktop */}
          <div className="hidden md:flex space-x-10 items-center font-normal">
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="text-white text-pink-civitatis-hover font-normal cursor-pointer bg-transparent border-0 p-0"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection(experienceRef)}
              className="text-white text-pink-civitatis-hover font-normal cursor-pointer bg-transparent border-0 p-0"
            >
              Experiencia
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="text-white text-pink-civitatis-hover font-normal cursor-pointer bg-transparent border-0 p-0"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection(aboutMeRef)}
              className="text-white text-pink-civitatis-hover font-normal cursor-pointer bg-transparent border-0 p-0"
            >
              Sobre mí
            </button>
            <div className="self-start font-normal">
              <button
                onClick={() => scrollToSection(contactRef)}
                className="bg-transparent border border-pink-civitatis text-white py-2 px-4 rounded hover:bg-pink-civitatis hover:text-gray-900 transition duration-300 font-normal cursor-pointer"
              >
                Contactar
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 px-6 pt-4 pb-6 space-y-4 font-normal flex flex-col items-start">
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="text-white text-pink-civitatis-hover cursor-pointer bg-transparent border-0 p-0 w-full text-left"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection(experienceRef)}
              className="text-white text-pink-civitatis-hover cursor-pointer bg-transparent border-0 p-0 w-full text-left"
            >
              Experiencia
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="text-white text-pink-civitatis-hover cursor-pointer bg-transparent border-0 p-0 w-full text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection(aboutMeRef)}
              className="text-white text-pink-civitatis-hover cursor-pointer bg-transparent border-0 p-0 w-full text-left"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="bg-transparent border border-pink-civitatis text-white py-2 px-4 rounded hover:bg-pink-civitatis hover:text-gray-900 transition duration-300 cursor-pointer w-full text-center"
            >
              Contactar
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
