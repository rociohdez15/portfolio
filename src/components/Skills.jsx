import React from "react";

const icons = [
  { name: "JavaScript", src: "https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png", alt: "JavaScript logo" },
  { name: "CSS", src: "https://raw.githubusercontent.com/github/explore/main/topics/css/css.png", alt: "CSS logo" },
  { name: "HTML", src: "https://raw.githubusercontent.com/github/explore/main/topics/html/html.png", alt: "HTML logo" },
  { name: "Vue.js", src: "https://raw.githubusercontent.com/github/explore/main/topics/vue/vue.png", alt: "Vue.js logo" },
  { name: "PHP", src: "https://raw.githubusercontent.com/github/explore/main/topics/php/php.png", alt: "PHP logo" },
  { name: "Laravel", src: "https://raw.githubusercontent.com/github/explore/main/topics/laravel/laravel.png", alt: "Laravel logo" },
  { name: "Java", src: "https://raw.githubusercontent.com/github/explore/main/topics/java/java.png", alt: "Java logo" },
  { name: "MySQL", src: "https://raw.githubusercontent.com/github/explore/main/topics/mysql/mysql.png", alt: "MySQL logo" },
  { name: "PostgreSQL", src: "https://raw.githubusercontent.com/github/explore/main/topics/postgresql/postgresql.png", alt: "PostgreSQL logo" },
  { name: "GitHub", src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", alt: "GitHub logo" },
  { name: "React", src: "https://raw.githubusercontent.com/github/explore/main/topics/react/react.png", alt: "React logo" },
  { name: "CodeIgniter", src: "https://raw.githubusercontent.com/github/explore/main/topics/codeigniter/codeigniter.png", alt: "CodeIgniter logo" },
];

export default function StackTecnologico() {
  return (
    <div className="bg-gray-900 text-white flex flex-col items-center font-sans pt-8 px-6">
      <style>{`
        .text-pink-civitatis { color: #E91E63; }
        .border-pink-civitatis { border-color: #E91E63; }
        .bg-pink-civitatis { background-color: #E91E63; }
      `}</style>

      <br /><br /><br /><br />
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center">
        Sta
        <span className="text-pink-civitatis cursor-default select-none">
          ck
        </span>{" "}
        Tecnológico
      </h1>
      <div className="w-16 h-1 bg-pink-civitatis rounded mx-auto mb-12"></div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl justify-center">
        {icons.map(({ name, src, alt }) => (
          <div
            key={name}
            className="flex flex-col items-center text-white text-sm space-y-2"
          >
            <img src={src} alt={alt} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            <span className="text-center">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
