import React from "react";

const Navbar = ({ projectsRef, experienceRef, skillsRef, aboutMeRef, contactRef }) => {

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
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
          <div className="text-lg font-bold mr-12 cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            Rocío - Portfolio
          </div>
          <div className="flex space-x-10 items-center font-normal">
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
      </nav>
    </>
  );
};

export default Navbar;
