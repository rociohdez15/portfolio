import React from "react";

const projects = [
  {
    id: 1,
    title: "AlojaDirecto",
    description:
      "Aplicación desarrollada con Laravel y Vue para gestionar reservas, habitaciones, clientes y facturación en hoteles. Control de disponibilidad, check-in/out, gestión de precios y servicios adicionales para optimizar la operativa diaria y mejorar la experiencia del cliente.",
    image:
      "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      "Laravel",
      "API",
      "RESTful",
      "Vue",
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS",
      "Git",
      "Github",
    ],
  },
  {
    id: 2,
    title: "CRM",
    description:
      "CRM para consultora con backend en Java Spring Boot y frontend en React. Seguridad con Spring Security, JWT y BCrypt. Gestión de clientes, proyectos y tareas, con bases de datos MySQL y PostgreSQL. API RESTful para integración rápida y segura.",
    image:
      "https://www.creatio.com/sites/default/files/inline-images/order.png",
    tags: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "BCrypt",
      "MySQL",
      "PostgreSQL",
      "React",
      "API",
      "RESTful",
      "Git",
      "Github",
    ],
  },
  {
    id: 3,
    title: "Atalanta",
    description:
      "Gestión completa de paquetes turísticos con Laravel backend y React + Vue frontend. Administra destinos, reservas, itinerarios y usuarios, integrando seguridad y manejo eficiente para una experiencia fluida y confiable.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      "Laravel",
      "API",
      "RESTful",
      "React",
      "JWT",
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS",
      "Git",
      "Github",
    ],
  },
];

export default function Projects() {
  return (
    <>
      <style>{`
        .border-pink-civitatis {
          border-color: #E91E63;
        }
        .text-pink-civitatis {
          color: #E91E63;
        }
        .hover\\:bg-pink-civitatis:hover {
          background-color: #E91E63;
        }
        .hover\\:shadow-pink-civitatis:hover {
          box-shadow: 0 0 15px #E91E63;
        }
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #E91E63 transparent;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #E91E63;
          border-radius: 10px;
        }
      `}</style>

      <section
        id="projects"
        className="bg-gray-900 py-10 px-6 flex flex-col items-center text-white font-sans"
      >
        <h2 className="text-5xl font-extrabold mb-3 tracking-tight">
          <span className="text-pink-civitatis italic">Pro</span>yectos Destacados
        </h2>

        <div className="h-1 w-20 bg-pink-civitatis rounded-full mb-10 shadow-pink-civitatis"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
          {projects.map(({ id, title, description, image, tags }) => (
            <article
              key={id}
              className="border border-pink-civitatis rounded-lg p-6 shadow-lg bg-gray-800 hover:shadow-pink-civitatis transition-shadow flex flex-col max-w-md mx-auto"
              tabIndex={0}
              aria-label={`Proyecto ${title}`}
            >
              <div className="overflow-hidden rounded-md mb-5 border border-pink-civitatis hover:scale-105 transition-transform duration-300 ease-in-out">
                <img
                  src={image}
                  alt={`${title} — imagen de proyecto`}
                  className="object-cover w-full h-56 md:h-48"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2e74d7c6-b409-4cb7-9dab-975279a3765d.png")
                  }
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-300 flex-grow mb-5 leading-relaxed">{description}</p>
              <ul className="flex flex-wrap gap-2 scrollbar-thin max-h-24 overflow-y-auto pr-2">
                {tags.map((tag, idx) => (
                  <li
                    key={idx}
                    className="border border-pink-civitatis text-pink-civitatis text-xs font-semibold px-3 py-1 rounded-full transition-colors hover:bg-pink-civitatis hover:text-white cursor-default select-none"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
