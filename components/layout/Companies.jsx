import CompanyCard from "../ui/CompanyCard";

export default function Companies() {
  const companies = [
    {
      name: "Televisa",
      slogan: "",
      logo: "/images/company/televisa.png",
    },
    {
      name: "Tv Azteca",
      slogan: "",
      logo: "/images/company/tva-zteca.png",
    },
    {
      name: "Bayer",
      slogan: "",
      logo: "/images/company/bayer.png",
    },
    {
      name: "SEMAR",
      slogan: "Secretaría de Marina",
      logo: "/images/company/semarnat.png",
      shortDescription: ["GENEXUS X - Capacitación"],
    },
    {
      name: "SEMARNAT",
      slogan: "Secretaría de Medio Ambiente y Recursos Naturales",
      logo: "/images/company/semarnat 2.png",
      shortDescription: ["SEMARNAT- Desarrollo de trámites electrónicos."],
    },
    {
      name: "Cablemás",
      slogan: "",
      logo: "/images/company/cablemas.png",
      shortDescription: [
        "Desarrollo de sistema para la programación de la transmisión de comerciales.",
        "Interfase de información de venta de publicidad a SAP.",
      ],
    },
    {
      name: "PGJ",
      slogan: "Procuraduría General de Justicia del Distrito Federal",
      logo: "/images/company/pgj.png",
      shortDescription: ["SAVEHR - Sistema control vehicular."],
    },
    {
      name: "CAM",
      slogan: 'Materiales para Construcción "Casa Amaro" ::Puebla::',
      logo: "/images/company/casaamaro.png",
      shortDescription: ["SAVEHR - Sistema control vehicular."],
    },
    {
      name: "Colegio Virrey de Mendoza",
      slogan: "",
      logo: "/images/company/colegio-virreyde-mendoza.png",
      shortDescription: ["Sistema de Control Administrativo."],
    },
    {
      name: "PanAmericano",
      slogan: "",
      logo: "/images/company/panamericano.png",
    },
    {
      name: "IEDF",
      slogan: "Instituto Electoral del Distrito Federal",
      logo: "/images/company/iedf 2.png",
      shortDescription: [
        "Soporte técnico para desarrollo de aplicación en ambiente web.",
      ],
    },
    {
      name: "Ferrovalle",
      logo: "/images/company/ferrovalle.png",
    },
    {
      name: "BRINKS Repunblica Dominicana",
      logo: "/images/company/brinks_republica_dominicana.png",
    },
    {
      name: "Brinks Colombia",
      logo: "/images/company/brinks_colombia.png",
    },
    {
      name: "BRINKS Panamá",
      logo: "/images/company/brinks_panama.png",
    },
    {
      name: "BRINKS Brasil",
      logo: "/images/company/brinks_brasil.png",
    },
    {
      name: "EBS",
      slogan: "Enterprise Bussiness Systems",
      logo: "/images/company/shield_person.png",
      shortDescription: ["ERP - Sistema Call Center."],
    },
    {
      name: "Municipio de Cuautitlán Izcallli",
      slogan: "",
      logo: "/images/company/shield_person.png",
      shortDescription: ["Sistema de Indicadores de Gestión."],
    },
  ];

  return (
    <div className=" md:max-w-7xl mx-auto p-8 md:p-2 w-full mb-18">
      <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-3 md:gap-18">
        {companies.map((company, index) => (
          <CompanyCard
            key={index}
            name={company.name}
            slogan={company.slogan}
            logo={company.logo}
            shortDescription={company.shortDescription}
          />
        ))}
      </div>
    </div>
  );
}
