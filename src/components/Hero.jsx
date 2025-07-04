import React from "react";

const Hero = () => {
  return (
    <>
      <style>
        {`
          /* Colores personalizados */
          .border-pink-civitatis {
            border-color: #E91E63;
          }
          .text-pink-civitatis {
            color: #E91E63;
          }
          .hover\\:bg-pink-civitatis:hover {
            background-color: #E91E63;
          }
          .focus\\:ring-pink-civitatis:focus {
            --tw-ring-color: #E91E63;
          }
          .shadow-pink-civitatis {
            box-shadow: 0 12px 15px -3px rgba(233, 30, 99, 0.6);
          }
          .text-pink-civitatis-svg {
            color: #E91E63;
          }
          /* Fuente manuscrita personalizada */
          @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
          .font-handwritten {
            font-family: 'Pacifico', cursive;
          }
        `}
      </style>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center items-center px-6 sm:px-12">
        {/* Saludo personalizado */}
        <p className="text-center text-lg mb-8 tracking-wide font-semibold">
          ¡Hola! Soy <span className="text-pink-civitatis font-bold">Rocío, bienvenido/a a mi portfolio.</span>
        </p>

        {/* Título principal con estilo único */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center max-w-5xl leading-tight relative">
          Desarrolladora Web{" "}
          <span className="inline-block relative px-3 ml-3 sm:ml-6 -mt-8 sm:-mt-12 rotate-[10deg] font-handwritten text-4xl sm:text-5xl md:text-6xl text-pink-civitatis/90 shadow-pink-civitatis select-none">
            front
            <br />
            <span className="inline-block -mt-5">{"& back"}</span>
          </span>{" "}
          end
        </h1>

        {/* Pequeña descripción o lema */}
        <p className="mt-6 max-w-xl text-center text-gray-300 font-medium tracking-wide leading-relaxed">
          Me apasiona crear experiencias digitales que conectan y solucionan problemas reales. <br />
          ¡Vamos a construir algo increíble juntos!
        </p>

        {/* Flecha animada que invita a hacer scroll */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-8 h-8 text-pink-civitatis-svg mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            aria-label="down arrow"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero;
