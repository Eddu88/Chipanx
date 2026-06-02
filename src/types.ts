export type PageType = 'home' | 'about' | 'services' | 'calculator' | 'products' | 'clients' | 'contact';

export interface TranslationSet {
  // Navigation
  navHome: string;
  navAbout: string;
  navProducts: string;
  navServices: string;
  navCalculator: string;
  navContact: string;

  // Hero Section
  heroEst: string;
  heroSlides: {
    title: string;
    sub: string;
    description: string;
  }[];
  heroScroll: string;

  // Welcome Section
  welcomeLabel: string;
  welcomeSub: string;
  welcomeTitle: string;
  welcomeText1: string;
  welcomeText2: string;

  // Services Section
  servicesLabel: string;
  servicesTitle: string;
  servicesSubheading: string;
  servicesDesc: string;
  servicesList: {
    id: string;
    name: string;
    desc: string;
    moreDetails: string;
    image: string;
    modalImage: string;
  }[];
  btnMore: string;
  closeBtn: string;

  // Features Section
  featuresList: {
    title: string;
    desc: string;
  }[];

  // Products Section
  productsTitle: string;
  productsViewAll: string;
  productsList: {
    cat: string;
    name: string;
    desc: string;
    specs: string[];
    img: string;
  }[];

  // Steel Calculator Section
  calcTitle: string;
  calcSubtitle: string;
  calcThick: string;
  calcWidth: string;
  calcDensity: string;
  calcOuterD: string;
  calcInnerD: string;
  calcCalculate: string;
  calcResultWeight: string;
  calcResultLength: string;
  calcResultPricing: string;
  calcEstimationDisclaimer: string;

  // Contact Form
  contactTitle: string;
  contactLine: string;
  contactText: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formService: string;
  formMsg: string;
  formSubmit: string;
  formSuccess: string;

  // Footer & Brand list
  footerCopyright: string;
  footerPrivacy: string;

  // Clients Section
  clientsTitle: string;
  clientsSubheading: string;
  clientsDesc: string;
  clientsPortalTitle: string;
  clientsPortalDesc: string;
  clientsPortalBtn: string;
  clientsList: {
    company: string;
    industry: string;
    quote: string;
    author: string;
  }[];
}

export type Language = 'es' | 'en';

export const translations: Record<Language, TranslationSet> = {
  es: {
    navHome: "INICIO",
    navAbout: "NOSOTROS",
    navProducts: "PRODUCTOS",
    navServices: "SERVICIOS",
    navCalculator: "CALCULADORA",
    navContact: "CONTACTO",

    heroEst: "Est. 2015 · Excelencia en Metalmecánica y Calibración Industrial",
    heroSlides: [
      {
        title: "METALMECÁNICA Y CALIBRACIÓN INDUSTRIAL",
        sub: "10+ AÑOS DE PRECISIÓN Y EXCELENCIA OPERATIVA",
        description: "Servicios integrales de fabricación estructural, reparación de componentes mineros y calibración certificada de instrumentación industrial."
      },
      {
        title: "MANTENIMIENTO DE EQUIPO MINERO E INDUSTRIAL",
        sub: "SOLUCIONES INTEGRALES EN CAMPO Y TALLER",
        description: "Overhaul de tolvas, reconstrucción de baldes de pala y mantenimiento preventivo para grandes operaciones de minería en el Perú."
      },
      {
        title: "CALIDAD Y SEGURIDAD CERTIFICADA",
        sub: "RESPALDO TÉCNICO BAJO NORMAS INTERNACIONALES",
        description: "Garantizamos la máxima confiabilidad, trazabilidad metrológica e integridad estructural en cada uno de nuestros proyectos."
      }
    ],
    heroScroll: "Desplazar",

    welcomeLabel: "BIENVENIDOS",
    welcomeSub: "A PRODIEM",
    welcomeTitle: "Socio Estratégico en Metalmecánica y Calibraciones Industriales",
    welcomeText1: "PRODIEM (MANTENIMIENTOS CALIBRACIONES INDUSTRIALES METAL PERÚ S.A.C) es una empresa peruana con más de 10 años de experiencia, líder en brindar servicios especializados de metalmecánica, mantenimiento de equipos pesados y calibración de instrumentos para el sector industrial y minero. Nos comprometemos a optimizar la disponibilidad y confiabilidad de los activos de nuestros clientes mediante estándares rigurosos de ingeniería y precisión.",
    welcomeText2: "Nuestra Política de Calidad nos impulsa a la mejora continua y a la satisfacción de nuestros clientes, garantizando la trazabilidad en cada calibración y la máxima resistencia estructural en cada fabricación. Valores Corporativos: ✓ Compromiso con la Seguridad ✓ Precisión e Integridad ✓ Innovación y Mejora Continua ✓ Orientación al Cliente ✓ Trabajo en Equipo.",

    servicesLabel: "Qué Hacemos",
    servicesTitle: "Nuestros Servicios",
    servicesSubheading: "Soluciones de Ingeniería y Precisión",
    servicesDesc: "Ofrecemos servicios de metalmecánica industrial y minera con soldaduras homologadas, mecanizado in situ y calibraciones certificadas bajo normas internacionales.",
    servicesList: [
      {
        id: "01",
        name: "FABRICACIÓN Y MONTAJE DE ESTRUCTURAS",
        desc: "Diseño y manufactura de estructuras metálicas de gran envergadura, chutes, tolvas y plataformas industriales.",
        moreDetails: "Fabricamos y montamos estructuras metálicas según código AISC y normas AWS. Contamos con amplia experiencia en naves industriales, soportes de tuberías, escaleras y plataformas de acceso para plantas concentradoras y campamentos.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80"
      },
      {
        id: "02",
        name: "MANTENIMIENTO DE EQUIPO MINERO",
        desc: "Overhaul integral de tolvas, baldes de pala y componentes sometidos a alta abrasión e impacto.",
        moreDetails: "Especialistas en la reconstrucción y mantenimiento de tolvas de camiones mineros, baldes de palas cargadoras, chutes de descarga y chancadoras. Aplicamos planchas de desgaste de alta dureza para maximizar el tiempo operativo.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&q=80"
      },
      {
        id: "03",
        name: "CALIBRACIÓN E INSTRUMENTACIÓN INDUSTRIAL",
        desc: "Calibración certificada de balanzas, sensores de presión, temperatura, fuerza y flujo.",
        moreDetails: "Brindamos servicios de calibración con trazabilidad certificada para instrumentos de medición industrial. Aseguramos la precisión de balanzas analíticas, manómetros, termómetros, transmisores de presión y celdas de carga.",
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1581092918451-b8d4f40d853e?w=600&q=80"
      },
      {
        id: "04",
        name: "MECANIZADO DE PRECISIÓN EN SITIO",
        desc: "Mandrinado, refrentado y rectificado de piezas de gran tamaño directamente en campo.",
        moreDetails: "Soluciones de mecanizado portátil in-situ para restaurar la geometría original de alojamientos de pasadores, bridas de grandes diámetros, ejes y apoyos, reduciendo tiempos de desmontaje y transporte.",
        image: "https://images.unsplash.com/photo-151870660439-4636190af475?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80"
      },
      {
        id: "05",
        name: "SOLDADURA ESPECIALIZADA Y HOMOLOGADA",
        desc: "Soldadores calificados bajo normas AWS D1.1, D1.5 y ASME Sección IX para uniones estructurales críticas.",
        moreDetails: "Aplicación de soldadura especializada SMAW, FCAW, GTAW en aceros al carbono, inoxidables y aleaciones especiales. Realizamos recubrimientos duros protectores contra el desgaste severo por abrasión.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=600&q=80"
      },
      {
        id: "06",
        name: "INGENIERÍA Y DISEÑO DE DETALLE",
        desc: "Modelado tridimensional, planos de fabricación y análisis de elementos finitos (FEA).",
        moreDetails: "Desarrollamos proyectos desde la ingeniería conceptual hasta los planos de detalle para su fabricación. Empleamos software CAD/CAE de última generación para garantizar la viabilidad y seguridad de cada componente.",
        image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
      },
      {
        id: "07",
        name: "PRUEBAS NO DESTRUCTIVAS (PND)",
        desc: "Inspección de soldaduras mediante ultrasonido, partículas magnéticas y líquidos penetrantes.",
        moreDetails: "Garantizamos la integridad de las uniones soldadas y la detección de fisuras o fallas internas mediante ensayos no destructivos (NDT). Emitimos reportes técnicos firmados por inspectores certificados Nivel II.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80"
      },
      {
        id: "08",
        name: "MANTENIMIENTO DE SISTEMAS HIDRÁULICOS",
        desc: "Diagnóstico y reparación de cilindros, bombas y centrales hidráulicas de maquinaria pesada.",
        moreDetails: "Brindamos soporte integral a sistemas hidráulicos de alta presión. Realizamos el cambio de sellos, lapear componentes, reconstrucción de vástagos y pruebas de presión para asegurar el óptimo rendimiento.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
      },
      {
        id: "09",
        name: "CORTE CNC POR PLASMA Y OXICORTE",
        desc: "Corte automatizado de planchas de acero con precisión milimétrica según diseño del cliente.",
        moreDetails: "Servicio de pantógrafo CNC para el dimensionamiento exacto de planchas de acero al carbono e inoxidable. Ideal para la fabricación de bridas, cartelas, discos de desgaste y componentes a medida.",
        image: "https://images.unsplash.com/photo-151870660439-4636190af475?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80"
      },
      {
        id: "10",
        name: "REVESTIMIENTOS Y PINTURA INDUSTRIAL",
        desc: "Protección anticorrosiva y antiabrasiva con recubrimientos epóxicos y liners de alta resistencia.",
        moreDetails: "Aplicación de esquemas de pintura epóxica y de poliuretano bajo normas de preparación de superficie SSPC. Instalación de planchas de desgaste (liners) de caucho, poliuretano o cerámicos en chutes y tolvas.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
      },
      {
        id: "11",
        name: "FABRICACIÓN DE SPOOLS Y TUBERÍAS",
        desc: "Fabricación de spools de tuberías de acero al carbono e inoxidable bajo código ASME B31.3.",
        moreDetails: "Desarrollamos líneas de conducción críticas para agua, relaves y pulpa mineral. Realizamos biselado, soldadura y pruebas hidrostáticas con entrega de dossieres de calidad completos.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=600&q=80"
      },
      {
        id: "12",
        name: "PARADAS DE PLANTA Y MONTAJE MECÁNICO",
        desc: "Mantenimiento preventivo planificado en plantas concentradoras y complejos industriales.",
        moreDetails: "Ejecución de trabajos de alta criticidad durante paradas programadas. Cambio de forros de molinos, alineación de fajas transportadoras, mantenimiento de zarandas vibratorias y overhaul de celdas de flotación.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&q=80"
      }
    ],
    btnMore: "MÁS INFO",
    closeBtn: "Cerrar",

    featuresList: [
      {
        title: "Fabricación",
        desc: "Diseño y manufactura de estructuras metálicas, chutes, tolvas y spools de tuberías bajo especificaciones técnicas estrictas y códigos internacionales."
      },
      {
        title: "Reparación",
        desc: "Servicios de mantenimiento y soldaduras homologadas para equipos pesados de minería y componentes de desgaste para extender su vida útil."
      },
      {
        title: "Calibración",
        desc: "Calibración y certificación metrológica de instrumentos de medición industrial con trazabilidad garantizada y altos estándares de precisión."
      }
    ],

    productsTitle: "Nuestros Productos",
    productsViewAll: "Ver Todos los Productos →",
    productsList: [
      {
        cat: "Equipos Mineros",
        name: "Tolvas y Chutes de Descarga",
        desc: "Diseño y fabricación de tolvas, chutes y buzones de descarga revestidos con planchas antidesgaste de alta dureza para el manejo de mineral abrasivo.",
        specs: ["Acero estructural ASTM A36 / A572", "Planchas de desgaste tipo Hardox 450/500", "Ensayos no destructivos (tintas y ultrasonido) incluidos"],
        img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80"
      },
      {
        cat: "Estructuras",
        name: "Estructuras Metálicas Modulares",
        desc: "Módulos estructurales de rápido montaje como plataformas, escaleras, barandas y soportes galvanizados por inmersión en caliente para ambientes corrosivos.",
        specs: ["Norma de diseño AISC y soldadura AWS D1.1", "Acabado galvanizado bajo norma ASTM A123", "Fácil transporte y ensamble perno-perno"],
        img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80"
      },
      {
        cat: "Tuberías Industriales",
        name: "Spools de Tubería de Alta Presión",
        desc: "Tramos de tuberías prefabricados y bridados para líneas de conducción de fluidos abrasivos, relaves y agua de procesos en plantas concentradoras.",
        specs: ["Fabricado según código ASME B31.3", "Revestimiento interno antiabrasivo de caucho o poliuretano", "Pruebas hidrostáticas certificadas a presión de diseño"],
        img: "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=600&q=80"
      }
    ],

    calcTitle: "Calculadora de Peso de Bobinas y Planchas de Acero",
    calcSubtitle: "Herramienta técnica para ingenieros de PRODIEM. Calcule el peso total aproximado de las bobinas de acero requeridas para su fabricación.",
    calcThick: "Espesores de Hoja (mm)",
    calcWidth: "Ancho de la Bobina (mm)",
    calcDensity: "Densidad del Material (g/cm³)",
    calcOuterD: "Diámetro Exterior (OD) (mm)",
    calcInnerD: "Diámetro Interior (ID) / Núcleo (mm)",
    calcCalculate: "CALCULAR PARÁMETROS",
    calcResultWeight: "Peso Estimado de la Bobina",
    calcResultLength: "Largo Total de Hoja en Bobina",
    calcResultPricing: "Costo Base Procesado Maquila",
    calcEstimationDisclaimer: "Nota: Los cálculos son estimaciones técnicas que pueden variar según las propiedades metalúrgicas de la materia prima real.",

    contactTitle: "PONTE EN CONTACTO",
    contactLine: "Línea Directa de Atención Corporativa",
    contactText: "¿Tiene un proyecto de fabricación estructural, mantenimiento de equipo pesado o calibración de instrumentos? Contáctenos al +51 922 488 668. Nuestro equipo de ingenieros en Lima, Perú diseñará una propuesta a la medida de sus operaciones mineras o industriales en menos de 24 horas.",
    formName: "Nombre y Apellido",
    formEmail: "Correo Electrónico Corporativo",
    formPhone: "Teléfono de Contacto",
    formService: "Servicio Requerido",
    formMsg: "Mensaje, dimensiones específicas o tolerancias deseadas...",
    formSubmit: "SOLICITAR COTIZACIÓN",
    formSuccess: "¡Mensaje Enviado Exitosamente! Un asesor técnico de PRODIEM le contactará a la brevedad.",

    footerCopyright: "PRODIEM © 2025 · MANTENIMIENTOS CALIBRACIONES INDUSTRIALES METAL PERÚ S.A.C. Todos los derechos reservados.",
    footerPrivacy: "Políticas de Calidad · Términos y Condiciones",

    // Clients Section
    clientsTitle: "NUESTROS CLIENTES Y SOCIOS",
    clientsSubheading: "CONFIANZA FORJADA EN PRECISIÓN",
    clientsDesc: "Brindamos soporte técnico y operativo a las principales empresas mineras e industriales del Perú. Conozca lo que dicen nuestros socios estratégicos.",
    clientsPortalTitle: "Portal de Clientes PRODIEM",
    clientsPortalDesc: "Acceda a su cuenta para visualizar certificados de calibración, informes de inspección PND (NDT), estado de fabricación en tiempo real y guías de remisión.",
    clientsPortalBtn: "INGRESAR AL PORTAL",
    clientsList: [
      {
        company: "Compañía Minera Antamina",
        industry: "Minería de Cobre y Zinc",
        quote: "El servicio de reconstrucción de tolvas y soldadura especializada de PRODIEM ha duplicado la vida útil de nuestros componentes de acarreo en el tajo abierto.",
        author: "Ing. Roberto Quispe, Superintendente de Mantenimiento"
      },
      {
        company: "Sociedad Minera Cerro Verde",
        industry: "Minería de Cobre",
        quote: "La calibración metrológica y mantenimiento preventivo de nuestras balanzas industriales garantiza la precisión de nuestros despachos de concentrado. Excelente soporte.",
        author: "Ing. Miguel Valdivia, Jefe de Instrumentación"
      },
      {
        company: "Refinería de Cajamarquilla",
        industry: "Metalurgia del Zinc",
        quote: "Confiamos en PRODIEM para la fabricación de spools y el montaje de estructuras en nuestras paradas de planta. Su compromiso con la seguridad es de clase mundial.",
        author: "Ing. Sandra Beltrán, Gerente de Proyectos"
      }
    ]
  },
  en: {
    navHome: "HOME",
    navAbout: "ABOUT US",
    navProducts: "PRODUCTS",
    navServices: "SERVICES",
    navCalculator: "CALCULATOR",
    navContact: "CONTACT",

    heroEst: "Est. 2015 · Excellence in Metal-Mechanics & Industrial Calibration",
    heroSlides: [
      {
        title: "METAL-MECHANICS & INDUSTRIAL CALIBRATION",
        sub: "10+ YEARS OF PRECISION AND OPERATIONAL EXCELLENCE",
        description: "Comprehensive services for structural fabrication, mining component repair, and certified calibration of industrial instrumentation."
      },
      {
        title: "MINING & INDUSTRIAL EQUIPMENT MAINTENANCE",
        sub: "INTEGRAL FIELD & WORKSHOP SOLUTIONS",
        description: "Overhaul of hoppers, shovel bucket reconstruction, and preventive maintenance for large-scale mining operations in Peru."
      },
      {
        title: "CERTIFIED QUALITY AND SAFETY",
        sub: "TECHNICAL BACKING UNDER INTERNATIONAL STANDARDS",
        description: "We guarantee maximum reliability, metrological traceability, and structural integrity in every single project."
      }
    ],
    heroScroll: "Scroll Down",

    welcomeLabel: "WELCOME",
    welcomeSub: "TO PRODIEM",
    welcomeTitle: "Strategic Partner in Metal-Mechanics and Industrial Calibration",
    welcomeText1: "PRODIEM (MANTENIMIENTOS CALIBRACIONES INDUSTRIALES METAL PERÚ S.A.C) is a Peruvian company with over 10 years of experience, leading the provision of specialized metal-mechanical services, heavy equipment maintenance, and instrument calibration for the industrial and mining sectors. We are committed to optimizing the availability and reliability of our clients' assets through rigorous engineering and precision standards.",
    welcomeText2: "Our Quality Policy drives us toward continuous improvement and customer satisfaction, ensuring traceability in every calibration and maximum structural strength in every fabrication. Corporate Values: ✓ Safety Commitment ✓ Precision & Integrity ✓ Innovation & Continuous Improvement ✓ Customer Orientation ✓ Teamwork.",

    servicesLabel: "What We Do",
    servicesTitle: "Our Services",
    servicesSubheading: "Engineering & Precision Solutions",
    servicesDesc: "We offer industrial and mining metal-mechanical services with qualified welding, on-site machining, and certified calibrations under international standards.",
    servicesList: [
      {
        id: "01",
        name: "STRUCTURES FABRICATION AND ASSEMBLY",
        desc: "Design and manufacturing of large-scale metallic structures, chutes, hoppers, and industrial platforms.",
        moreDetails: "We fabricate and assemble metallic structures under AISC code and AWS standards. We have extensive experience in industrial buildings, pipe supports, ladders, and access platforms for concentrator plants and mining camps.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80"
      },
      {
        id: "02",
        name: "MINING EQUIPMENT MAINTENANCE",
        desc: "Comprehensive overhaul of hoppers, shovel buckets, and components subjected to high wear and impact.",
        moreDetails: "Specialists in the rebuilding and maintenance of mining truck hoppers, loader shovel buckets, discharge chutes, and crushers. We apply high-hardness wear plates to maximize uptime.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&q=80"
      },
      {
        id: "03",
        name: "CALIBRATION & INDUSTRIAL INSTRUMENTATION",
        desc: "Certified calibration of scales, pressure, temperature, force, and flow sensors.",
        moreDetails: "We provide calibration services with certified traceability for industrial measuring instruments. We ensure the precision of analytical balances, pressure gauges, thermometers, pressure transmitters, and load cells.",
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1581092918451-b8d4f40d853e?w=600&q=80"
      },
      {
        id: "04",
        name: "ON-SITE PRECISION MACHINING",
        desc: "Boring, facing, and grinding of large parts directly in the field.",
        moreDetails: "Portable on-site machining solutions to restore the original geometry of pin housings, large-diameter flanges, shafts, and supports, reducing disassembly and transportation times.",
        image: "https://images.unsplash.com/photo-1518709660439-4636190af475?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80"
      },
      {
        id: "05",
        name: "SPECIALIZED & CERTIFIED WELDING",
        desc: "Welders qualified under AWS D1.1, D1.5, and ASME Section IX codes for critical structural joints.",
        moreDetails: "SMAW, FCAW, GTAW specialized welding application on carbon steels, stainless steels, and special alloys. We perform protective hardfacing overlays against severe abrasive wear.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=600&q=80"
      },
      {
        id: "06",
        name: "ENGINEERING & DETAIL DESIGN",
        desc: "Three-dimensional modeling, fabrication drawings, and finite element analysis (FEA).",
        moreDetails: "We develop projects from conceptual engineering to detail fabrication drawings. We use state-of-the-art CAD/CAE software to guarantee the feasibility and safety of each component.",
        image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
      },
      {
        id: "07",
        name: "NON-DESTRUCTIVE TESTING (NDT)",
        desc: "Weld inspection using ultrasound, magnetic particles, and liquid penetrants.",
        moreDetails: "We guarantee the integrity of welded joints and detect internal cracks or defects using non-destructive testing (NDT). We issue technical reports signed by Level II certified inspectors.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80"
      },
      {
        id: "08",
        name: "HYDRAULIC SYSTEMS MAINTENANCE",
        desc: "Diagnosis and repair of cylinders, pumps, and hydraulic power units for heavy machinery.",
        moreDetails: "We provide comprehensive support for high-pressure hydraulic systems. We replace seals, lap components, rebuild rods, and conduct pressure tests to ensure optimum performance.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
      },
      {
        id: "09",
        name: "CNC PLASMA AND OXY-FUEL CUTTING",
        desc: "Automated steel plate cutting with millimeter precision according to client design.",
        moreDetails: "CNC pantograph service for precise sizing of carbon and stainless steel plates. Ideal for the manufacture of flanges, gussets, wear discs, and custom components.",
        image: "https://images.unsplash.com/photo-1518709660439-4636190af475?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80"
      },
      {
        id: "10",
        name: "COATING AND INDUSTRIAL PAINTING",
        desc: "Corrosion and abrasion protection with high-resistance epoxy coatings and liners.",
        moreDetails: "Application of epoxy and polyurethane paint systems under SSPC surface preparation standards. Installation of rubber, polyurethane, or ceramic wear plates (liners) in chutes and hoppers.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80"
      },
      {
        id: "11",
        name: "SPOOL AND PIPING FABRICATION",
        desc: "Fabrication of carbon and stainless steel piping spools under ASME B31.3 code.",
        moreDetails: "We develop critical transport pipelines for water, tailings, and mineral slurry. We perform beveling, welding, and hydrostatic testing with full quality dossiers delivery.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?w=600&q=80"
      },
      {
        id: "12",
        name: "PLANT SHUTDOWNS & MECHANICAL ASSEMBLY",
        desc: "Planned preventive maintenance in concentrator plants and industrial complexes.",
        moreDetails: "Execution of high-criticality works during programmed shutdowns. Changing mill liners, aligning conveyor belts, maintaining vibrating screens, and overhauling flotation cells.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
        modalImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&q=80"
      }
    ],
    btnMore: "MORE INFO",
    closeBtn: "Close",

    featuresList: [
      {
        title: "Fabrication",
        desc: "Design and manufacturing of metallic structures, chutes, hoppers, and pipe spools under strict technical specifications and international codes."
      },
      {
        title: "Repair",
        desc: "Maintenance services and certified welding for heavy mining equipment and wear parts to extend their operational lifespan."
      },
      {
        title: "Calibration",
        desc: "Metrological calibration and certification of industrial measuring instruments with guaranteed traceability and high precision standards."
      }
    ],

    productsTitle: "Our Products",
    productsViewAll: "View All Products →",
    productsList: [
      {
        cat: "Mining Equipment",
        name: "Hoppers & Discharge Chutes",
        desc: "Design and fabrication of hoppers, chutes, and discharge bins lined with high-hardness wear plates for abrasive mineral handling.",
        specs: ["ASTM A36 / A572 structural steel", "Hardox 450/500 type wear plates", "Included non-destructive testing (PT & UT)"],
        img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80"
      },
      {
        cat: "Structures",
        name: "Modular Metallic Structures",
        desc: "Quick-assembly structural modules such as platforms, stairs, handrails, and supports hot-dip galvanized for corrosive environments.",
        specs: ["AISC design and AWS D1.1 welding standards", "Galvanized finish per ASTM A123", "Easy transport and bolt-to-bolt assembly"],
        img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80"
      },
      {
        cat: "Industrial Piping",
        name: "High-Pressure Piping Spools",
        desc: "Prefabricated and flanged pipe spools for transporting abrasive fluids, tailings, and process water in concentrator plants.",
        specs: ["Manufactured under ASME B31.3 code", "Anti-abrasive internal rubber or polyurethane lining", "Hydrostatic testing certified to design pressure"],
        img: "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=600&q=80"
      }
    ],

    calcTitle: "Coil & Steel Plate Weight Calculator",
    calcSubtitle: "Technical tool for PRODIEM engineers. Calculate the approximate weight of steel coils required for your fabrication projects.",
    calcThick: "Sheet Thickness (mm)",
    calcWidth: "Coil Width (mm)",
    calcDensity: "Material Density (g/cm³)",
    calcOuterD: "Outer Diameter (OD) (mm)",
    calcInnerD: "Inner Diameter (ID) / Core (mm)",
    calcCalculate: "CALCULATE METRICS",
    calcResultWeight: "Estimated Coil Weight",
    calcResultLength: "Total Sheet Length",
    calcResultPricing: "Base Processing Tariff Estimated",
    calcEstimationDisclaimer: "Disclaimer: Calculated results represent close geometric approximations. Actual coil weights vary based on specific mill tolerances.",

    contactTitle: "GET IN TOUCH",
    contactLine: "Dedicated Industrial Desk",
    contactText: "Ready to discuss your engineering or calibration requirements? Contact us at +51 922 488 668. Our technical team in Lima, Peru will design a custom proposal for your mining or industrial operations in less than 24 hours.",
    formName: "Full Name & Position",
    formEmail: "Corporate Email Address",
    formPhone: "Contact Telephone",
    formService: "Primary Service Required",
    formMsg: "Detailed parameters, desired tolerances, material grade...",
    formSubmit: "SUBMIT QUOTE REQUEST",
    formSuccess: "Thank you! Your technical request has been successfully submitted. A PRODIEM technical advisor will contact you shortly.",

    footerCopyright: "PRODIEM © 2025 · MANTENIMIENTOS CALIBRACIONES INDUSTRIALES METAL PERÚ S.A.C. All rights reserved.",
    footerPrivacy: "Quality Policies · Terms & Conditions",

    // Clients Section
    clientsTitle: "CLIENT & PARTNER HUB",
    clientsSubheading: "TRUST FORGED IN PRECISION",
    clientsDesc: "We provide technical and operational support to the main mining and industrial companies in Peru. Here is what our strategic partners say.",
    clientsPortalTitle: "PRODIEM Customer Portal",
    clientsPortalDesc: "Log in to view calibration certificates, NDT inspection reports, real-time fabrication status, and shipping logs.",
    clientsPortalBtn: "LOG IN TO HUB",
    clientsList: [
      {
        company: "Compañía Minera Antamina",
        industry: "Copper & Zinc Mining",
        quote: "PRODIEM's hopper rebuilding and specialized welding services have doubled the lifespan of our hauling components in the open pit.",
        author: "Roberto Quispe, Maintenance Superintendent"
      },
      {
        company: "Sociedad Minera Cerro Verde",
        industry: "Copper Mining",
        quote: "The metrological calibration and preventive maintenance of our industrial scales ensure the precision of our concentrate shipments. Excellent support.",
        author: "Miguel Valdivia, Instrumentation Lead"
      },
      {
        company: "Refinería de Cajamarquilla",
        industry: "Zinc Metallurgy",
        quote: "We rely on PRODIEM for spool fabrication and structural assembly during our plant shutdowns. Their safety commitment is world-class.",
        author: "Sandra Beltrán, Projects Manager"
      }
    ]
  }
};
