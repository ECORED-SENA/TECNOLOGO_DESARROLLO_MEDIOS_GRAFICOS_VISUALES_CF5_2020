export default {
  global: {
    componenteFormativo: 'Producción gráfica 2',
    descripcionCurso:
      'El desarrollo del ejercicio del diseño es una constante manifestación creativa entre una problemática y su solución visual, partiendo de la observación e investigación, para así pasar a la realización de bocetos y propuestas gráficas, que terminan impresas de manera masiva y forman parte del proceso de las artes gráficas. Este componente formativo profundiza en el diseño y producción de empaques.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Prototipado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Del boceto al prototipo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Propuesta de diseño',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ajustes y correcciones tempranas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Orden de producción',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Formatos de salida',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Formatos y usos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Medios impresos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Medios digitales',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Sustratos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Prototipado de empaques',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Clasificación de empaques',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de empaque, funcionalidad y usos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Materiales',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Estructuras y diseño',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Fases de producción',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia: 'Acoplasticos. (2021). Empaques y envases Normas Nacionales.',
      link: 'https://www.acoplasticos.org/index.php/mnu-noti/258',
    },
    {
      referencia:
        'Angarita, P. (s.f). Sistemas de impresión costos y presupuestos CUN sede Santa Marta.',
      link: 'https://sistemascostosypresupuestoscun.wordpress.com/',
    },
    {
      referencia:
        'Colorenelmedio. (s.f). Pre-prensa digital. En colorenelmedio [Blog].',
      link: 'https://colorenelmedio.wordpress.com/pre-prensa-digital/',
    },
    {
      referencia:
        'Ferrada, A. (2018). Manual de Instrucciones para Preprensa. Universidad del Desarrollo',
      link: 'https://repositorio.udd.cl/handle/11447/2333',
    },
    {
      referencia:
        'Godínez, J. (27 de octubre de 2020). Preprensa digital (introducción). [video]. Youtube. [video].',
      link: ' https://www.youtube.com/watch?v=NH7RS9YXBNw',
    },
    {
      referencia:
        'Izquierdo, T. (2020). Diccionario de diseño gráfico: +100 palabras de diseño explicadas para no diseñadores.',
      link: 'https://taniaizquierdo.com/diccionario-diseno-grafico/',
    },
    {
      referencia:
        'Madererianasa. (2020). Principales tipos de empaque de uso industrial. en madererianasa [Blog].',
      link: 'https://www.madererianasa.com.mx/tipos-de-empaque/',
    },
    {
      referencia: 'Saraclip. (2017). Arquitectura de la información.',
      link: 'https://www.saraclip.com/tag/glossary/ ',
    },
  ],
  glosario: [
    {
      termino: 'Arquitectura de la información',
      significado:
        'La​ arquitectura de la Información es la disciplina encargada del estudio, análisis, organización, disposición y estructuración de la información en espacios de contenidos y de la selección y presentación de los datos en los sistemas de información interactivos y no interactivos (Saraclip, 2017).',
    },
    {
      termino: 'Arte final ',
      significado:
        'Como su nombre lo indica es el documento final listo para imprimir.<br>Para preparar las partes finales de un documento, además de asegurarse que el contenido no tiene errores, se debe dejar todo listo para que la imprenta que lo reciba pueda imprimirlo sin ningún inconveniente (Izquierdo, 2020).',
    },
    {
      termino: 'Bidimensional',
      significado: 'Que tiene dos dimensiones.',
    },
    {
      termino: 'Branding',
      significado:
        'Es el concepto para referirse a la identidad de marca: el proceso de diseño y las aplicaciones de la misma (Izquierdo, 2020).',
    },
    {
      termino: 'Cartografía',
      significado: 'Trazo de mapas geográficos.',
    },
    {
      termino: 'Community manager',
      significado:
        'Gestor de comunidades en internet para promocionar y posicionar una marca o empresa. ',
    },
    {
      termino: 'Folio ',
      significado: 'Hoja de un libro o de un cuaderno.',
    },
    {
      termino: 'Hipervínculo',
      significado: 'Enlace o vínculo empleado en la web. ',
    },
    {
      termino: 'Packaging',
      significado: 'Hace referencia al embalaje. ',
    },
    {
      termino: 'Planning',
      significado: 'Relativo a planificación.',
    },
  ],
  complementario: [
    {
      texto: 'Acoplásticos. (2021). Empaques y envases Normas Nacionales.',
      tipo: 'Página web',
      link: 'https://www.acoplasticos.org/index.php/mnu-noti/258 ',
    },
    {
      texto:
        'Godínez, J. (27 de octubre de 2020). Preprensa digital (introducción). [video]. YouTube. ',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=NH7RS9YXBNw ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Guillermo Eduardo González Tarazona',
        cargo: 'Instructor ',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Dayra Maritza Paz Calderón',
        cargo: 'Diseñadora y Evaluadora Instruccional ',
        centro: 'Centro de Diseño y Metrología.',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Pedagógico y Metodológico',
        centro: 'Centro de Diseño y Metrología.',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia  Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura ',
        regional: 'Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
