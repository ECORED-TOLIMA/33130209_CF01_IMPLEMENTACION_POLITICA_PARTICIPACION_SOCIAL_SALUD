export default {
  global: {
    Name: 'Fundamentos normativos de la participación social en salud.',
    Description:
      'Este componente aborda los fundamentos conceptuales y normativos del derecho a la salud y la participación social en salud en Colombia. Analiza la Ley Estatutaria de Salud, la Política de Participación Social en Salud y su marco estratégico, con el propósito de comprender cómo la ciudadanía, las organizaciones y las instituciones contribuyen al ejercicio del derecho a la salud y al fortalecimiento del bienestar colectivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Marco normativo del derecho a la salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Antecedentes del derecho a la salud',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Normativa de participación social en salud',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Participación social en salud en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de participación social en salud',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Marco conceptual de la participación social',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Objetivos de la participación social en salud',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Derecho fundamental a la salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Ley Estatutaria de Salud',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Componentes del derecho a la salud',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Política de Participación Social en Salud',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Marco estratégico',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Principios orientadores y ejes de la política',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Implementación de la participación social en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Etapas de implementación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Estructura organizativa',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Mecanismos de participación social',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Desarrollo y fortalecimiento de la participación social',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Situación actual: avances y desafíos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Niveles de desarrollo de la participación',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Estrategias de fortalecimiento',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Formación y educación para la participación',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Rol de las instituciones y la comunidad',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Desarrollo y fortalecimiento de la participación social',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Situación actual: avances y desafíos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Niveles de desarrollo de la participación',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Estrategias de fortalecimiento',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Formación y educación para la participación',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Rol de las instituciones y la comunidad',
            hash: 't_6_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [],
  glosario: [
    {
      termino: 'Autocuidado',
      significado:
        'Conjunto de prácticas y decisiones que realizan las personas para mantener y mejorar su salud, prevenir enfermedades y promover el bienestar individual y colectivo.',
    },
    {
      termino: 'Control social',
      significado:
        'Mecanismo mediante el cual la ciudadanía realiza seguimiento y vigilancia a la gestión pública, con el fin de garantizar la transparencia, la adecuada utilización de los recursos y el cumplimiento de las políticas públicas en salud.',
    },
    {
      termino: 'Corresponsabilidad',
      significado:
        'Principio que reconoce la responsabilidad compartida entre el Estado, las instituciones y la ciudadanía en la protección, promoción y cuidado de la salud.',
    },
    {
      termino: 'Derecho a la salud',
      significado:
        'Derecho fundamental que garantiza a todas las personas el acceso a servicios de salud oportunos, eficaces y de calidad, así como las condiciones necesarias para alcanzar el bienestar físico, mental y social.',
    },
    {
      termino: 'Gestión en salud',
      significado:
        'Conjunto de procesos administrativos, técnicos y organizativos orientados a planificar, implementar, evaluar y mejorar las acciones relacionadas con el sistema de salud.',
    },
    {
      termino: 'Incidencia ciudadana',
      significado:
        'Capacidad de las personas y organizaciones sociales para influir en las decisiones públicas, la formulación de políticas y la gestión del sistema de salud.',
    },
    {
      termino: 'Ley Estatutaria de Salud',
      significado:
        'Norma jurídica que reconoce la salud como un derecho fundamental autónomo y establece los principios que orientan la garantía del derecho a la salud en Colombia (Ley 1751 de 2015).',
    },
    {
      termino: 'Participación social en salud',
      significado:
        'Proceso mediante el cual las personas, comunidades y organizaciones sociales intervienen activamente en la planeación, gestión, seguimiento y evaluación de las políticas y acciones del sistema de salud.',
    },
    {
      termino: 'Política de Participación Social en Salud (PPSS)',
      significado:
        'Estrategia del Estado colombiano que establece lineamientos, principios y acciones para fortalecer la participación de la ciudadanía en la gestión del sistema de salud.',
    },
    {
      termino: 'Salud pública',
      significado:
        'Conjunto de acciones orientadas a proteger y mejorar la salud de la población mediante la promoción de la salud, la prevención de enfermedades y el fortalecimiento de los servicios de salud.',
    },
    {
      termino: 'Sistema de salud',
      significado:
        'Conjunto de instituciones, recursos, normas y procesos organizados para garantizar la prestación de servicios de salud y la protección del bienestar de la población.',
    },
    {
      termino: 'Transparencia',
      significado:
        'Principio que garantiza el acceso a la información pública y la claridad en la gestión de las instituciones, facilitando el control ciudadano y la rendición de cuentas.',
    },
    {
      termino: 'Veeduría ciudadana',
      significado:
        'Mecanismo de participación mediante el cual los ciudadanos realizan seguimiento y vigilancia a la gestión pública y a la ejecución de programas o proyectos relacionados con el sistema de salud.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (1991). <em>Constitución Política de Colombia</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1993). <em>Ley 100 de 1993. Por la cual se crea el Sistema de Seguridad Social Integral y se dictan otras disposiciones.</em>',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5248',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (1994). <em>Decreto 1757 de 1994. Por el cual se establecen formas de participación social en el Sistema General de Seguridad Social en Salud.</em>',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=21850',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2011). <em>Ley 1438 de 2011. Por medio de la cual se reforma el Sistema General de Seguridad Social en Salud y se dictan otras disposiciones.</em>',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41355',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2015). <em>Ley 1751 de 2015. Por medio de la cual se regula el derecho fundamental a la salud y se dictan otras disposiciones.</em>',
      link:
        'https://www.minsalud.gov.co/normatividad_nuevo/ley%201751%20de%202015.pdf',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2015). Ley 1757 de 2015. Por la cual se dictan disposiciones en materia de promoción y protección del derecho a la participación democrática.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=65335',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). <em>Resolución 2063 de 2017. Por la cual se adopta la Política de Participación Social en Salud (PPSS).</em>',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%202063%20de%202017.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). <em>Política de Atención Integral en Salud (PAIS).</em>',
      link:
        'https://www.minsalud.gov.co/sites/rid/lists/bibliotecadigital/ride/de/modelo-pais-2016.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Laura Briguitte Perea Possos ',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
          cargo: 'Desarrollador <em>full stack</em>',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
