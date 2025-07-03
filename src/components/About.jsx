import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center py-16 px-6">
      <div className="max-w-6xl flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <article className="flex-1 max-w-xl">
          <h2 className="text-5xl font-extrabold mb-4">
            <span className="text-pink-civitatis">Sobre </span>
            <span className="font-sans">mí</span>
          </h2>
          <div className="border-b-2 border-pink-civitatis w-20 mb-10"></div>

          <p className="mb-6 leading-relaxed">
            ¡Hola! Soy <strong>Rocío Hernández Silva</strong>. Aunque mi formación inicial fue en sistemas microinformáticos y administración de sistemas, mi verdadera pasión la encontré en el desarrollo de aplicaciones web y backend.
            {" "}
            <span className="text-pink-civitatis font-mono font-semibold whitespace-pre-wrap">
              Desde entonces, me he especializado en tecnologías como Laravel, Spring Boot, React y más.
            </span>
          </p>

          <p className="mb-6 leading-relaxed">
            He tenido la oportunidad de trabajar en varios proyectos que van desde la gestión de reservas hoteleras hasta sistemas CRM y tiendas online, aplicando buenas prácticas, seguridad y usabilidad en cada desarrollo.
            {" "}
            <span className="text-pink-civitatis font-mono font-semibold whitespace-pre-wrap">
              Además, valoro mucho el trabajo en equipo, la mejora continua y el aprendizaje constante para crecer profesional y personalmente.
            </span>
          </p>

          <p className="mb-6 leading-relaxed">
            Busco nuevos retos donde pueda aportar mis conocimientos y seguir aprendiendo, especialmente en el desarrollo backend y la integración con frontend moderno.
            {" "}
            <span className="text-pink-civitatis font-mono font-semibold whitespace-pre-wrap">
              Si quieres conocer más sobre mi trabajo o colaborar, no dudes en contactarme.
            </span>
          </p>
        </article>

        <aside className="flex-shrink-0">
          <div className="rounded-xl overflow-hidden shadow-lg w-64 h-64 md:w-72 md:h-72 bg-gray-800 transform hover:scale-105 transition-transform duration-300 relative border border-pink-civitatis">
            <img
              src="yo.jpg"
              alt="Retrato de Rocío Hernández Silva"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0d2f77e4-576f-460c-8240-21f40cfda394.png";
              }}
            />
          </div>
        </aside>
      </div>

      {/* Añadimos estilos para el color rosa */}
      <style>{`
        .border-pink-civitatis {
          border-color: #E91E63;
        }
        .text-pink-civitatis {
          color: #E91E63;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
