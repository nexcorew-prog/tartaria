import customsHero from "@/assets/customs-hero.jpg";
import domesticMove from "@/assets/domestic-move.jpg";

export const siteImages = {
  customsHero,
  domesticMove,
};

export const services = [
  {
    slug: "importacion",
    title: "Importación",
    summary:
      "Gestión aduanera para el ingreso de mercancías al país, con orientación documental y seguimiento operativo.",
    detail:
      "Acompañamos el despacho de importaciones para diferentes tipos de mercancía, coordinando los requisitos que exige el comercio exterior boliviano.",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Contenedores de carga en una operación portuaria de importación",
    highlights: [
      "Revisión inicial del tipo de mercancía y la operación",
      "Orientación sobre los documentos y requisitos aplicables",
      "Coordinación y seguimiento del despacho",
    ],
  },
  {
    slug: "exportacion",
    title: "Exportación",
    summary:
      "Soporte para la salida legal de mercancías, revisión de documentación y coordinación con los actores del proceso.",
    detail:
      "Preparamos cada operación para que la carga avance con orden, trazabilidad y comunicación clara durante el proceso de exportación.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Contenedores preparados para su despacho y exportación",
    highlights: [
      "Evaluación de la mercancía y su destino",
      "Revisión de documentos disponibles",
      "Coordinación para una salida ordenada de la carga",
    ],
  },
  {
    slug: "menaje-domestico",
    title: "Menaje doméstico",
    summary:
      "Servicio para traslado de mudanza de hogar, ideal para residentes que cambian su domicilio entre países.",
    detail:
      "Orientamos a familias y residentes en los trámites necesarios para mover pertenencias personales bajo el régimen correspondiente.",
    image: domesticMove,
    imageAlt: "Pertenencias personales preparadas para una mudanza internacional",
    highlights: [
      "Orientación para familias y residentes que se trasladan",
      "Revisión de pertenencias y documentación disponible",
      "Acompañamiento durante el proceso entre Brasil y Bolivia",
    ],
  },
  {
    slug: "asesoria-aduanera",
    title: "Asesoría aduanera",
    summary:
      "Evaluación inicial de requisitos, pasos y documentación para operaciones de comercio exterior.",
    detail:
      "Antes de mover una carga, revisamos el caso y explicamos el camino más conveniente para iniciar la gestión correctamente.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Espacio logístico de almacenamiento y organización de mercancías",
    highlights: [
      "Evaluación inicial del caso y sus necesidades",
      "Orientación clara sobre requisitos y próximos pasos",
      "Identificación de la documentación necesaria para avanzar",
    ],
  },
];

export const faqs = [
  {
    question: "¿Qué información necesito para consultar una operación?",
    answer:
      "Si los tiene disponibles, comparta el tipo de mercancía, el país de origen o destino y la documentación con la que cuenta. Con esos datos podremos orientarle sobre los próximos pasos.",
  },
  {
    question: "¿Atienden operaciones de importación y exportación?",
    answer:
      "Sí. Brindamos orientación y acompañamiento para despachos de importación y exportación, además de asesoría aduanera y gestión de menaje doméstico.",
  },
  {
    question: "¿Los requisitos son iguales para todas las mercancías?",
    answer:
      "No. Los documentos y requisitos dependen del tipo de mercancía y de las características de cada operación. Por eso empezamos con una evaluación del caso.",
  },
  {
    question: "¿Dónde está ubicada Tartaria?",
    answer:
      "Estamos en Puerto Suárez, Santa Cruz, Bolivia, una ubicación estratégica para operaciones comerciales entre Bolivia y Brasil.",
  },
];

export const processSteps = [
  "Revisión de la operación y tipo de mercancía",
  "Orientación sobre documentos y requisitos aplicables",
  "Coordinación del despacho con seguimiento del proceso",
  "Comunicación directa hasta el cierre de la gestión",
];
