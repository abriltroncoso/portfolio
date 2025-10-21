import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  GraduationCap,
  Smartphone,
  Database,
  Layout,
  Menu,
  X,
} from "lucide-react";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Aplicación Android con Kotlin",
      description:
        "Aplicación móvil nativa desarrollada para Android utilizando Kotlin, implementando las mejores prácticas de desarrollo móvil y arquitectura MVVM.",
      icon: <Smartphone className="w-12 h-12" />,
      tech: ["Kotlin", "Android SDK", "MVVM", "Material Design"],
      category: "Mobile Development",
      highlights: [
        "Interfaz nativa",
        "Arquitectura limpia",
        "Performance optimizado",
      ],
      link: "https://github.com/abriltroncoso/AndroidProject",
    },
    {
      id: 2,
      title: "Sistema Web Angular + MongoDB",
      description:
        "Aplicación web full-stack con frontend en Node.js, MongoDB como base de datos y autenticación basada en tokens JWT, implementando un sistema completo con gestión de datos en tiempo real.",
      icon: <Database className="w-12 h-12" />,
      tech: ["Node.js", "Angular", "MongoDB", "JWT", "Express"],
      category: "Full Stack Web",
      highlights: [
        "Autenticación con tokens",
        "API RESTful",
        "Base de datos NoSQL",
      ],
      link: "https://republica-dusky.vercel.app/Home",
    },
    {
      id: 3,
      title: "Web Interactiva con Animaciones CSS",
      description:
        "Sitio web dinámico e interactivo desarrollado con JavaScript vanilla y HTML, destacando por sus animaciones CSS avanzadas y experiencia de usuario fluida.",
      icon: <Layout className="w-12 h-12" />,
      tech: ["JavaScript", "HTML5", "CSS3", "Animations"],
      category: "Frontend Development",
      highlights: [
        "Animaciones fluidas",
        "Responsive design",
        "JavaScript vanilla",
      ],
      link: "https://lucagoro.github.io/Tp-Interfaces/TP2/auth/login",
    },
  ];

  const skills = [
    { category: "Lenguajes", items: ["Kotlin", "JavaScript", "Java", "PHP"] },
    {
      category: "Frameworks & Libraries",
      items: ["Spring Boot", "Node.js", "Angular", "Hilt"],
    },
    { category: "Bases de Datos", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    { category: "Testing", items: ["JUnit", "TestNG"] },
    {
      category: "Metodologías",
      items: ["POO", "Metodologías Ágiles", "Control de Versiones"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-black">AT</div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#inicio"
                className="text-gray-700 hover:text-black transition font-medium"
              >
                Inicio
              </a>
              <a
                href="#proyectos"
                className="text-gray-700 hover:text-black transition font-medium"
              >
                Proyectos
              </a>
              <a
                href="#skills"
                className="text-gray-700 hover:text-black transition font-medium"
              >
                Habilidades
              </a>
              <a
                href="#contacto"
                className="text-gray-700 hover:text-black transition font-medium"
              >
                Contacto
              </a>
            </div>

            <button
              className="md:hidden text-black"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#inicio"
                className="block text-gray-700 hover:text-black font-medium"
              >
                Inicio
              </a>
              <a
                href="#proyectos"
                className="block text-gray-700 hover:text-black font-medium"
              >
                Proyectos
              </a>
              <a
                href="#skills"
                className="block text-gray-700 hover:text-black font-medium"
              >
                Habilidades
              </a>
              <a
                href="#contacto"
                className="block text-gray-700 hover:text-black font-medium"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-black text-white text-sm font-medium rounded-full">
                Disponible para colaborar
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
                Abril Troncoso
              </h1>
              <p className="text-lg text-gray-600 mb-2">19 años</p>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                Estudiante de{" "}
                <span className="font-semibold text-black">
                  Tecnicatura Universitaria en Desarrollo de Aplicaciones
                  Informaticas - UNICEN
                </span>{" "}
                - Graduación Diciembre 2025
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Apasionada por crear soluciones tecnológicas innovadoras.
                Especializada en desarrollo full-stack y móvil, con enfoque en
                código limpio y buenas prácticas. Lista para comenzar mi carrera
                profesional.
              </p>
              <div className="flex gap-4 mb-8">
                <a
                  href="#proyectos"
                  className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition"
                >
                  Ver Proyectos
                </a>
                <a
                  href="#contacto"
                  className="px-6 py-3 border-2 border-black text-black font-medium rounded-lg hover:bg-black hover:text-white transition"
                >
                  Contacto
                </a>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/abriltroncoso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-300 hover:border-black rounded-lg transition"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abril-troncoso-1239a3308/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-300 hover:border-black rounded-lg transition"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:abriltroncoso108@gmail.com"
                  className="p-3 border border-gray-300 hover:border-black rounded-lg transition"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-gray-300 shadow-lg">
                  <img
                    src="/portfolio/foto-abril.jpg"
                    alt="Abril Troncoso"
                    className="w-full h-96 object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                    style={{ display: "none" }}
                  >
                    <Code2 className="w-48 h-48 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Proyectos Destacados
            </h2>
            <p className="text-gray-600 text-lg">
              Desarrollo web y móvil con tecnologías modernas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl border-2 border-gray-200 hover:border-black transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="mb-6 text-gray-400 group-hover:text-black transition-colors">
                    {project.icon}
                  </div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-black group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-6">
                    {project.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 mb-2 text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 border border-gray-300 px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-black font-medium hover:gap-3 transition-all"
                  >
                    Ver proyecto <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Habilidades Técnicas
            </h2>
            <p className="text-gray-600 text-lg">
              Tecnologías y metodologías que domino
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-black transition-all"
              >
                <h3 className="text-xl font-bold mb-6 text-black flex items-center gap-3">
                  <div className="w-2 h-8 bg-black rounded"></div>
                  {skillGroup.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skillGroup.items.map((skill, j) => (
                    <div
                      key={j}
                      className="bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg font-medium text-gray-800 hover:bg-black hover:text-white transition-all cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl border-2 border-gray-200 p-8"></div>
          <div className="mt-12 bg-white rounded-xl border-2 border-gray-200 p-8">
            <h3 className="text-xl font-bold mb-4 text-black">Idiomas</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-black text-white rounded-lg font-medium">
                Español - Nativo
              </span>
              <span className="px-4 py-2 bg-black text-white rounded-lg font-medium">
                Inglés - Fluido (B2)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 p-12">
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="w-12 h-12 text-black" />
              <h2 className="text-3xl font-bold text-black">Sobre mí</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Próxima a graduarme en{" "}
              <span className="font-semibold text-black">Diciembre 2025</span>{" "}
              de la{" "}
              <span className="font-semibold text-black">
                Tecnicatura Universitaria en Desarrollo de Aplicaciones
                Informaticas - UNICEN
              </span>
              , con un enfoque práctico en el desarrollo de soluciones completas
              tanto para web como para dispositivos móviles.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Mi experiencia abarca desde el desarrollo de aplicaciones móviles
              nativas con Kotlin, hasta sistemas web full-stack con frameworks
              modernos. Mi formacion fue centrada en escribir código limpio,
              escalable y mantener las mejores prácticas de la industria y el
              trabajo en equipo. Estoy lista para comenzar mi carrera
              profesional y aportar valor desde el primer día.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Estoy abierta a nuevas oportunidades, colaboraciones y proyectos
            desafiantes
          </p>
          <a
            href="mailto:abriltroncoso108@gmail.com"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition transform hover:scale-105"
          >
            Enviar mensaje
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t-2 border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p className="font-medium">
            © 2025 Abril Troncoso. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
