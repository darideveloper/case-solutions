import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Code,
  Workflow,
  Database,
  Download,
} from "lucide-react";
import ReactMarkdown from "react-markdown";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const accordionData = [
    {
      title: "Desarrollo de Sistemas a la Medida",
      content: `
- Plataforma Web, cliente servidor. (Do Net, Java Server Faces, Java ServerL, PHP)
- .NET, JAVA Genexus, WebServices, Conexión ERP SAP, ERP Oracle.
- Base de datos Oracle, SQL Server, MySql, Informix, DB2.
- Genexus: poderosa herramienta para el diseño y desarrollo de software multiplataforma, soporta lenguajes líderes y DBMS más populares.
      `,
      icon: Code,
    },
    {
      title: "Modelado de Proceso (Flow)",
      content: `
- Análisis y diseño de flujos de trabajo empresariales.
- Identificación de procesos clave y puntos de optimización.
- Creación de diagramas de flujo detallados.
- Mejora de la eficiencia operativa mediante modelado preciso.
      `,
      icon: Workflow,
    },
    {
      title: "Elaboración y Consulta de su Base de Datos Tecnología OLAP",
      content: `
- Implementación de cubos OLAP para análisis multidimensional.
- Consultas complejas y agregaciones de datos.
- Visualización de información empresarial en tiempo real.
- Soporte para toma de decisiones estratégicas.
      `,
      icon: Database,
    },
    {
      title: "Captura y Procesamiento de Datos",
      content: `
- Diseño de encuestas y formularios digitales. 
- Desarrollo de herramientas personalizadas para la recolección de datos.
- Procesamiento de la información.
- Captura profesional de datos, respaldada por software propio.

### Ventajas que ofrecemos:
- Alta calidad en la información procesada: Precisión y confiabilidad en cada dato.
- Seguridad y confidencialidad: Manejamos tus datos con total responsabilidad.
- Equipo especializado en sitio: Profesionales capacitados en campo y en nuestras instalaciones.
- Flexibilidad operativa: Trabajamos en tus instalaciones o en las nuestras, según tus necesidades.


Al finalizar cada proyecto, entregamos la aplicación desarrollada para la captura de datos, asegurando que el cliente cuente con una herramienta funcional y reutilizable.
      `,
      icon: Download,
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Custom components for ReactMarkdown to apply styling
  const components = {
    // Style the container for the markdown content
    div: ({ node, ...props }) => (
      <div className="prose max-w-none" {...props} />
    ),
    // Style the lists
    ul: ({ node, ...props }) => <ul className="space-y-2 ml-4" {...props} />,
    // Style the list items
    li: ({ node, ...props }) => (
      <li className="flex items-start" {...props}>
        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 mt-2 mr-2"></span>
        <span>{props.children}</span>
      </li>
    ),
    // Style headings if needed
    h1: ({ node, ...props }) => (
      <h1 className="text-xl font-bold mb-2" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="text-lg font-bold mb-2" {...props} />
    ),
    h3: ({ node, ...props }) => (
      <h3 className="text-md font-bold mb-1 my-4" {...props} />
    ),
    p: ({ node, ...props }) => (
      <p className="my-4" {...props} />
    ),
  };

  return (
    <div className="max-w-2xl mx-auto shadow-lg rounded-lg space-y-4 overflow-hidden">
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-gray">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between p-4 text-left 
                       bg-primary text-white"
          >
            <div className="flex items-center space-x-3">
              <item.icon className="w-6 h-6" />
              <span className="font-bold text-lg uppercase">{item.title}</span>
            </div>
            {openIndex === index ? <ChevronUp /> : <ChevronDown />}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-700">
                <ReactMarkdown components={components}>
                  {item.content}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
