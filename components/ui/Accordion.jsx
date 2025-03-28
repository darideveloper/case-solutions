import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Code,
  Workflow,
  Database,
  Download,
} from "lucide-react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: "Desarrollo de Sistemas a la Medida",
      content: [
        "Plataforma Web, cliente servidor. (Do Net, Java Server Faces, Java ServerL, PHP)",
        ".NET, JAVA Genexus, WebServices, Conexión ERP SAP, ERP Oracle.",
        "Base de datos Oracle, SQL Server, MySql, Informix, DB2.",
        "Genexus: poderosa herramienta para el diseño y desarrollo de software multiplataforma, soporta lenguajes líderes y DBMS más populares.",
      ],
      icon: Code,
    },
    {
      title: "Modelado de Proceso (Flow)",
      content: [
        "Análisis y diseño de flujos de trabajo empresariales.",
        "Identificación de procesos clave y puntos de optimización.",
        "Creación de diagramas de flujo detallados.",
        "Mejora de la eficiencia operativa mediante modelado preciso.",
      ],
      icon: Workflow,
    },
    {
      title: "Elaboración y Consulta de su Base de Datos Tecnología OLAP",
      content: [
        "Implementación de cubos OLAP para análisis multidimensional.",
        "Consultas complejas y agregaciones de datos.",
        "Visualización de información empresarial en tiempo real.",
        "Soporte para toma de decisiones estratégicas.",
      ],
      icon: Database,
    },
    {
      title: "Captura y Procesamiento de Datos",
      content: [
        "Recolección de datos de múltiples fuentes.",
        "Limpieza y transformación de datos.",
        "Integración de sistemas de información.",
        "Preparación de datos para análisis avanzado.",
      ],
      icon: Download,
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden">
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-gray">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between p-4 text-left 
                       bg-primary text-white"
          >
            <div className="flex items-center space-x-3">
              <item.icon className="w-6 h-6" />
              <span className="font-semibold">{item.title}</span>
            </div>
            {openIndex === index ? <ChevronUp /> : <ChevronDown />}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-700">
                <ul className="space-y-2">
                  {item.content.map((contentItem, contentIndex) => (
                    <li
                      key={contentIndex}
                      className="pl-2 border-l-2 border-indigo-500 
                                 transition-all duration-300 
                                 transform hover:translate-x-2"
                    >
                      {contentItem}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
