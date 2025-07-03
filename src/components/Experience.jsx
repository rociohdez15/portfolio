import React from "react";

const Experience = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center px-6 py-10 pb-0 mb-0 font-sans">
      <style>{`
        .border-pink-civitatis { border-color: #E91E63; }
        .text-pink-civitatis { color: #E91E63; }
        .hover\\:bg-pink-civitatis:hover { background-color: #E91E63; }
        .hover\\:text-white:hover { color: white; }
      `}</style>

      <br />
      <br />
      <br />
      <h1 className="text-5xl font-extrabold mb-2 text-center select-none">
        E<span className="text-[#E91E63]">x</span>
        <span className="text-[#E91E63] -rotate-12 inline-block origin-bottom-left">
          p
        </span>
        eriencia Laboral
      </h1>
      <div className="w-16 h-1 bg-[#E91E63] rounded-full mb-10"></div>

      <section
        className="w-full mx-auto space-y-10"
        style={{ maxWidth: "928px" }}
      >
        {/* Safebrok */}
        <article className="rounded-lg border border-[#E91E63] shadow-md hover:shadow-pink-civitatis transition-shadow duration-300">
          <header className="bg-[#E91E63] rounded-t-lg px-6 py-4">
            <h2 className="font-bold text-lg leading-tight text-white">
              Desarrolladora Backend - CRM Safebrok
            </h2>
            <div className="flex justify-between items-center text-white text-sm mt-1">
              <p className="font-semibold">Safebrok Consulting</p>
              <p className="italic text-sm font-light">Septiembre 2024 - Diciembre 2024</p>
            </div>
          </header>
          <div className="bg-[#12131a] rounded-b-lg px-6 py-5 text-white text-base leading-relaxed">
            En Safebrok, tuve la oportunidad de desarrollar y mantener un CRM que realmente ayuda a las empresas a gestionar sus clientes, proyectos y tareas con total confianza.
            Trabajé con Spring Boot y Spring Security, implementando JWT para una seguridad sólida, y combiné React para crear una interfaz moderna que facilita el día a día de los usuarios.
            La base de datos integrada con MySQL y PostgreSQL me permitió manejar la información de forma eficiente y escalable, asegurando un rendimiento óptimo.
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Spring Boot",
                "JWT",
                "React",
                "Spring Security",
                "MySQL",
                "PostgreSQL",
                "Git",
                "Github",
              ].map((tech) => (
                <span
                  key={tech}
                  className="border border-pink-civitatis text-pink-civitatis rounded-full px-3 py-1 text-sm cursor-default select-none transition-colors hover:bg-pink-civitatis hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* AlojaDirecto */}
        <article className="rounded-lg border border-[#E91E63] shadow-md hover:shadow-pink-civitatis transition-shadow duration-300">
          <header className="bg-[#E91E63] rounded-t-lg px-6 py-4">
            <h2 className="font-bold text-lg leading-tight text-white">
              Desarrolladora Web Fullstack - AlojaDirecto
            </h2>
            <div className="flex justify-between items-center text-white text-sm mt-1">
              <p className="font-semibold">Proyecto Integrado DAW</p>
              <p className="italic text-sm font-light">Septiembre 2024 - Diciembre 2024</p>
            </div>
          </header>
          <div className="bg-[#12131a] rounded-b-lg px-6 py-5 text-white text-base leading-relaxed">
            AlojaDirecto fue un proyecto en el que puse en práctica mis habilidades fullstack desarrollando una aplicación para gestionar reservas y habitaciones de hoteles.
            Me encargué del backend en Laravel y del frontend con Vue.js, buscando siempre optimizar la experiencia del usuario y garantizar un flujo sencillo para la gestión diaria.
            Implementé funcionalidades claves como control de disponibilidad, facturación y servicios adicionales, asegurando una solución sólida para el cliente.
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Laravel",
                "Vue",
                "CSS",
                "HTML",
                "JavaScript",
                "MySQL",
                "Bootstrap",
                "Git",
                "Github",
              ].map((tech) => (
                <span
                  key={tech}
                  className="border border-pink-civitatis text-pink-civitatis rounded-full px-3 py-1 text-sm cursor-default select-none transition-colors hover:bg-pink-civitatis hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Atalanta */}
        <article className="rounded-lg border border-[#E91E63] shadow-md hover:shadow-pink-civitatis transition-shadow duration-300">
          <header className="bg-[#E91E63] rounded-t-lg px-6 py-4">
            <h2 className="font-bold text-lg leading-tight text-white">
              Desarrolladora Web Fullstack - Atalanta
            </h2>
            <div className="flex justify-between items-center text-white text-sm mt-1">
              <p className="font-semibold">Freelance (Proyecto Familiar)</p>
              <p className="italic text-sm font-light">Enero 2025 - Actualidad</p>
            </div>
          </header>
          <div className="bg-[#12131a] rounded-b-lg px-6 py-5 text-white text-base leading-relaxed">
            Actualmente, desarrollo Atalanta, una plataforma para comercializar paquetes turísticos que ayuda a mi familia a lanzar su negocio con una solución tecnológica robusta y atractiva.
            Trabajo con Laravel en el backend, con una API RESTful segura gracias a JWT, y un frontend en React que asegura una experiencia fluida y adaptable para cualquier dispositivo.
            Además, cuido el diseño y la usabilidad con Bootstrap y CSS, buscando siempre un equilibrio entre funcionalidad y estética.
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "PHP",
                "Laravel",
                "React",
                "Github",
                "JWT",
                "CSS",
                "MySQL",
                "Bootstrap",
              ].map((tech) => (
                <span
                  key={tech}
                  className="border border-pink-civitatis text-pink-civitatis rounded-full px-3 py-1 text-sm cursor-default select-none transition-colors hover:bg-pink-civitatis hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Experience;
