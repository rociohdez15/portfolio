import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-gray-900 flex flex-col justify-center items-center px-4 text-white py-16">
      {/* Puedes incluir este style si quieres las clases reutilizables */}
      <style>{`
        .text-pink-civitatis { color: #E91E63; }
        .bg-pink-civitatis { background-color: #E91E63; }
        .hover\\:text-pink-civitatis:hover { color: #E91E63; }
      `}</style>

      <h1 className="text-5xl font-extrabold mb-2 text-center">
        Contac
        <span className="inline-block text-pink-civitatis transform rotate-6 origin-center">
          t
        </span>
        <span className="inline-block text-pink-civitatis transform -rotate-6 origin-center">
          o
        </span>
      </h1>
      <div className="w-16 h-1 bg-pink-civitatis rounded mx-auto mb-8" />
      <p className="text-center max-w-xl font-semibold mb-2">
        Actualmente disponible para nuevas oportunidades y colaboraciones.
      </p>
      <p className="text-center max-w-xl font-semibold mb-8">
        ¡No dudes en escribirme!
      </p>
      <div className="flex space-x-12 text-pink-civitatis text-4xl">
        {/* LinkedIn icon */}
        <a
          href="https://www.linkedin.com/in/roc%C3%ADo-hern%C3%A1ndez-silva-a8a58a206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-pink-civitatis transition-colors"
        >
          <svg
            fill="currentColor"
            stroke="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 11.25h-3v-5c0-1.379-1.121-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v5h-3v-10h3v1.364c.679-.98 1.868-1.364 3-1.364 2.21 0 4 1.79 4 4v6z" />
          </svg>
        </a>
        {/* Email icon */}
        <a
          href="mailto:rociohdez2705@hotmail.com"
          aria-label="Email"
          className="hover:text-pink-civitatis transition-colors"
        >
          <svg
            fill="currentColor"
            stroke="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
          >
            <path d="M20 4H4c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h16c1.105 0 2-.896 2-2V6c0-1.104-.895-2-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
          </svg>
        </a>
        {/* GitHub icon */}
        <a
          href="https://github.com/rociohdez15"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-pink-civitatis transition-colors"
        >
          <svg
            fill="currentColor"
            stroke="none"
            strokeWidth="0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.38-1.333-1.747-1.333-1.747-1.09-.745.083-.729.083-.729 1.204.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.42-1.304.763-1.604-2.665-.3-5.466-1.334-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.123-.302-.535-1.52.117-3.166 0 0 1.008-.322 3.301 1.23a11.53 11.53 0 013.003-.403c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.647.242 2.865.12 3.167.77.84 1.235 1.912 1.235 3.22 0 4.61-2.807 5.63-5.48 5.922.43.37.823 1.1.823 2.22v3.293c0 .32.217.69.825.573C20.565 21.796 24 17.297 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
