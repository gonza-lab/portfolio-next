import type { NextApiRequest, NextApiResponse } from 'next';

const projects = [
  {
    id: 1,
    attributes: {
      name: 'Telecom Institucional',
      description:
        'El sitio institucional de Telecom. Desarrollado con NextJS, en este proyecto tuve la oportunidad de aprender a trabajar en equipo cómo también mejorar mis habilidades técnicas.',
      date: '2022-08-23',
      slug: 'telecom-institucional',
      url: 'https://institucional.telecom.com.ar/',
      github: null,
      createdAt: '2022-04-06T14:00:04.062Z',
      updatedAt: '2022-07-20T11:55:13.918Z',
      publishedAt: '2022-04-06T14:00:05.595Z',
      content: [
        {
          id: 1,
          __component: 'sections.rich-text',
          content:
            'Telecom Institucional fue el primer proyecto profesional del que fui parte con el equipo de [EstoEs](https://www.estoes.me/). Mi rol en este proyecto era de desarrollador **front end** y **reviewer de pull requests**.\n\nEn este proyecto utilizamos React como librería base para el front end. Para estructurar los componentes, utilizamos [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/). Me gustaría destacar otras librerías que usamos para el proyecto y con las que cuento experiencia:\n- **Next**: [Next](https://nextjs.org/) lo utilizamos para mejorar la performance del anterior sitio y tener una mejor SEO. Considero que fue una buena decisión. En este sitio utilizamos ```getServerSideProps``` por lo que lo convirtió en un sitio hibrido. Fue la primera vez que utilicé Next, y la experiencia que me llevo es buena. Es una librería que me gustó mucho y planeo utilizarla en próximos proyectos.\n\n- **MaterialUI**: [MaterialUI](https://mui.com/) es una librería de componentes de React, que se basa en la normativa de diseño [Material Design](https://es.wikipedia.org/wiki/Material_Design). De esta librería utilicé componentes para armar el layout, tales como ```Container```, ```Grid```, componentes para formularios, hasta componentes mas complejos. De esta librería me llevo experiencias muy positivas, permitió tener una mejor experiencia de desarrollo y nos ahorró mucho tiempo. La documentación es muy buena, y los componentes son muy faciles de personalizar. Además es una librería muy potente que permite crear temas y tu propio design system. \n\n- **Redux**: [Redux](https://redux.js.org/) es un contenedor predecible de estado. Lo utilizamos para manejar el estado de las [notas](https://institucional.telecom.com.ar/prensa) del sitio. Lo utilizamos junto a [Redux Thunk](https://github.com/reduxjs/redux-thunk) para las peticiones asíncronas. Lo que es el estado, acciones y selectores lo hicimos a mano, sin Redux Dev Toolkit, si hubiéramos utilizado este los tiempos de desarrollo hubiesen sido más rápidos.',
        },
        {
          id: 1,
          __component: 'sections.slider',
          images: {
            data: [
              {
                id: 6,
                attributes: {
                  name: 'institucional.telecom.com.ar_ (1).png',
                  alternativeText: 'institucional.telecom.com.ar_ (1).png',
                  caption: 'institucional.telecom.com.ar_ (1).png',
                  width: 1920,
                  height: 976,
                  formats: {
                    large: {
                      ext: '.png',
                      url: '/uploads/large_institucional_telecom_com_ar_1_1ff7da0fc9.png',
                      hash: 'large_institucional_telecom_com_ar_1_1ff7da0fc9',
                      mime: 'image/png',
                      name: 'large_institucional.telecom.com.ar_ (1).png',
                      path: null,
                      size: 453.03,
                      width: 1000,
                      height: 508,
                    },
                    small: {
                      ext: '.png',
                      url: '/uploads/small_institucional_telecom_com_ar_1_1ff7da0fc9.png',
                      hash: 'small_institucional_telecom_com_ar_1_1ff7da0fc9',
                      mime: 'image/png',
                      name: 'small_institucional.telecom.com.ar_ (1).png',
                      path: null,
                      size: 128.71,
                      width: 500,
                      height: 254,
                    },
                    medium: {
                      ext: '.png',
                      url: '/uploads/medium_institucional_telecom_com_ar_1_1ff7da0fc9.png',
                      hash: 'medium_institucional_telecom_com_ar_1_1ff7da0fc9',
                      mime: 'image/png',
                      name: 'medium_institucional.telecom.com.ar_ (1).png',
                      path: null,
                      size: 263.54,
                      width: 750,
                      height: 381,
                    },
                    thumbnail: {
                      ext: '.png',
                      url: '/uploads/thumbnail_institucional_telecom_com_ar_1_1ff7da0fc9.png',
                      hash: 'thumbnail_institucional_telecom_com_ar_1_1ff7da0fc9',
                      mime: 'image/png',
                      name: 'thumbnail_institucional.telecom.com.ar_ (1).png',
                      path: null,
                      size: 39.26,
                      width: 245,
                      height: 124,
                    },
                  },
                  hash: 'institucional_telecom_com_ar_1_1ff7da0fc9',
                  ext: '.png',
                  mime: 'image/png',
                  size: 278.26,
                  url: '/uploads/institucional_telecom_com_ar_1_1ff7da0fc9.webp',
                  previewUrl: null,
                  provider: 'local',
                  provider_metadata: null,
                  createdAt: '2022-04-12T12:36:09.855Z',
                  updatedAt: '2022-04-12T12:36:09.855Z',
                },
              },
              {
                id: 7,
                attributes: {
                  name: 'institucional.telecom.com.ar_ (2).png',
                  alternativeText: 'institucional.telecom.com.ar_ (2).png',
                  caption: 'institucional.telecom.com.ar_ (2).png',
                  width: 1920,
                  height: 976,
                  formats: {
                    large: {
                      ext: '.png',
                      url: '/uploads/large_institucional_telecom_com_ar_2_288dea9ee5.png',
                      hash: 'large_institucional_telecom_com_ar_2_288dea9ee5',
                      mime: 'image/png',
                      name: 'large_institucional.telecom.com.ar_ (2).png',
                      path: null,
                      size: 411.3,
                      width: 1000,
                      height: 508,
                    },
                    small: {
                      ext: '.png',
                      url: '/uploads/small_institucional_telecom_com_ar_2_288dea9ee5.png',
                      hash: 'small_institucional_telecom_com_ar_2_288dea9ee5',
                      mime: 'image/png',
                      name: 'small_institucional.telecom.com.ar_ (2).png',
                      path: null,
                      size: 121.72,
                      width: 500,
                      height: 254,
                    },
                    medium: {
                      ext: '.png',
                      url: '/uploads/medium_institucional_telecom_com_ar_2_288dea9ee5.png',
                      hash: 'medium_institucional_telecom_com_ar_2_288dea9ee5',
                      mime: 'image/png',
                      name: 'medium_institucional.telecom.com.ar_ (2).png',
                      path: null,
                      size: 247.76,
                      width: 750,
                      height: 381,
                    },
                    thumbnail: {
                      ext: '.png',
                      url: '/uploads/thumbnail_institucional_telecom_com_ar_2_288dea9ee5.png',
                      hash: 'thumbnail_institucional_telecom_com_ar_2_288dea9ee5',
                      mime: 'image/png',
                      name: 'thumbnail_institucional.telecom.com.ar_ (2).png',
                      path: null,
                      size: 36.33,
                      width: 245,
                      height: 124,
                    },
                  },
                  hash: 'institucional_telecom_com_ar_2_288dea9ee5',
                  ext: '.png',
                  mime: 'image/png',
                  size: 264.19,
                  url: '/uploads/institucional_telecom_com_ar_2_288dea9ee5.webp',
                  previewUrl: null,
                  provider: 'local',
                  provider_metadata: null,
                  createdAt: '2022-04-12T12:36:10.442Z',
                  updatedAt: '2022-04-12T12:36:10.442Z',
                },
              },
              {
                id: 5,
                attributes: {
                  name: 'institucional.telecom.com.ar_.png',
                  alternativeText: 'institucional.telecom.com.ar_.png',
                  caption: 'institucional.telecom.com.ar_.png',
                  width: 1920,
                  height: 976,
                  formats: {
                    large: {
                      ext: '.png',
                      url: '/uploads/large_institucional_telecom_com_ar_c42f2ec7ae.png',
                      hash: 'large_institucional_telecom_com_ar_c42f2ec7ae',
                      mime: 'image/png',
                      name: 'large_institucional.telecom.com.ar_.png',
                      path: null,
                      size: 406.14,
                      width: 1000,
                      height: 508,
                    },
                    small: {
                      ext: '.png',
                      url: '/uploads/small_institucional_telecom_com_ar_c42f2ec7ae.png',
                      hash: 'small_institucional_telecom_com_ar_c42f2ec7ae',
                      mime: 'image/png',
                      name: 'small_institucional.telecom.com.ar_.png',
                      path: null,
                      size: 122.09,
                      width: 500,
                      height: 254,
                    },
                    medium: {
                      ext: '.png',
                      url: '/uploads/medium_institucional_telecom_com_ar_c42f2ec7ae.png',
                      hash: 'medium_institucional_telecom_com_ar_c42f2ec7ae',
                      mime: 'image/png',
                      name: 'medium_institucional.telecom.com.ar_.png',
                      path: null,
                      size: 246.45,
                      width: 750,
                      height: 381,
                    },
                    thumbnail: {
                      ext: '.png',
                      url: '/uploads/thumbnail_institucional_telecom_com_ar_c42f2ec7ae.png',
                      hash: 'thumbnail_institucional_telecom_com_ar_c42f2ec7ae',
                      mime: 'image/png',
                      name: 'thumbnail_institucional.telecom.com.ar_.png',
                      path: null,
                      size: 36.39,
                      width: 245,
                      height: 124,
                    },
                  },
                  hash: 'institucional_telecom_com_ar_c42f2ec7ae',
                  ext: '.png',
                  mime: 'image/png',
                  size: 264.22,
                  url: '/uploads/institucional_telecom_com_ar_c42f2ec7ae.webp',
                  previewUrl: null,
                  provider: 'local',
                  provider_metadata: null,
                  createdAt: '2022-04-12T12:36:09.533Z',
                  updatedAt: '2022-04-12T12:36:09.533Z',
                },
              },
              {
                id: 4,
                attributes: {
                  name: 'institucional.telecom.com.ar_ (3).png',
                  alternativeText: 'institucional.telecom.com.ar_ (3).png',
                  caption: 'institucional.telecom.com.ar_ (3).png',
                  width: 1920,
                  height: 976,
                  formats: {
                    large: {
                      ext: '.png',
                      url: '/uploads/large_institucional_telecom_com_ar_3_4e9f27b824.webp',
                      hash: 'large_institucional_telecom_com_ar_3_4e9f27b824',
                      mime: 'image/png',
                      name: 'large_institucional.telecom.com.ar_ (3).png',
                      path: null,
                      size: 257.65,
                      width: 1000,
                      height: 508,
                    },
                    small: {
                      ext: '.png',
                      url: '/uploads/small_institucional_telecom_com_ar_3_4e9f27b824.png',
                      hash: 'small_institucional_telecom_com_ar_3_4e9f27b824',
                      mime: 'image/png',
                      name: 'small_institucional.telecom.com.ar_ (3).png',
                      path: null,
                      size: 79.99,
                      width: 500,
                      height: 254,
                    },
                    medium: {
                      ext: '.png',
                      url: '/uploads/medium_institucional_telecom_com_ar_3_4e9f27b824.png',
                      hash: 'medium_institucional_telecom_com_ar_3_4e9f27b824',
                      mime: 'image/png',
                      name: 'medium_institucional.telecom.com.ar_ (3).png',
                      path: null,
                      size: 157.94,
                      width: 750,
                      height: 381,
                    },
                    thumbnail: {
                      ext: '.png',
                      url: '/uploads/thumbnail_institucional_telecom_com_ar_3_4e9f27b824.png',
                      hash: 'thumbnail_institucional_telecom_com_ar_3_4e9f27b824',
                      mime: 'image/png',
                      name: 'thumbnail_institucional.telecom.com.ar_ (3).png',
                      path: null,
                      size: 25.52,
                      width: 245,
                      height: 124,
                    },
                  },
                  hash: 'institucional_telecom_com_ar_3_4e9f27b824',
                  ext: '.png',
                  mime: 'image/png',
                  size: 168.86,
                  url: '/uploads/institucional_telecom_com_ar_3_4e9f27b824.webp',
                  previewUrl: null,
                  provider: 'local',
                  provider_metadata: null,
                  createdAt: '2022-04-12T12:36:09.209Z',
                  updatedAt: '2022-04-12T12:36:09.209Z',
                },
              },
            ],
          },
        },
        {
          id: 2,
          __component: 'sections.rich-text',
          content:
            "## Qué me pudo haber salido mejor \nCreo que el tipado es un punto a mejorar en este proyecto. Hubiera sido buena idea utilizar TypeScript, la experiencia de desarrollo habría mejorado. También me hubiera gustado mejorar más lo que es el manejo de estados en las notas, y como se pedía la información a la api.\n\nOtra cosa que me hubiera gustado mejorar es como personalizábamos el SEO. El problema que teníamos, era asignar una etiqueta a un componente, según en que sección este. Por ejemplo, supongamos que tenemos un componente ```<Title>```, y este componente va a estar en la sección Inicio, y en Contacto. En inicio tiene que ser un ```h1```, y en Contacto un ```h2```. Me dirán que le pase la etiqueta que quiero que sea una prop llamada ```tag``` (por ejemplo). Pero en este sitio teníamos componentes mas complejos, y no era tan sencillo como pasarle una prop, ya que un mismo componentes podía estar en mas de dos secciones, y también un mismo componente tenia diferentes 'variantes'.\n\n## Qué me salió bien\nLo que si me gustó como se hizo, es la reutilización de componentes. Con el equipo hicimos componentes con un buen grado de reutilización, lo que permitió sacar secciones y sub-secciones mas rápido, ya que se utilizaban componentes hechos en anteriores secciones.\n\n## Qué aprendí \nComo dije Telecom Institucional fue el primer proyecto profesional del que fui parte. Aprendí a trabajar y comunicarme con el equipo. Aprendí a utilizar plataformas como BitBucket, Slack y Teams de Microsoft. Por el lado técnico, aprendí Next, MaterialUI, entre otras.\n\n## Conclusión\nDe este proyecto me llevo cosas muy positivas. Cuando ves en producción algo que te costó trabajo, es una sensación espectacular, y mas cuando ves con la calidad que salió. De este proyecto me llevo cosas a mejorar, como la comunicación y también librerías para utilizar en futuros trabajos, como Material y Next.",
        },
      ],
      cover: {
        data: {
          id: 1,
          attributes: {
            name: 'telecom-logo.png',
            alternativeText: 'telecom-logo.png',
            caption: 'telecom-logo.png',
            width: 1920,
            height: 1080,
            formats: {
              large: {
                ext: '.png',
                url: '/uploads/large_telecom_logo_48ca62ad1e.webp',
                hash: 'large_telecom_logo_48ca62ad1e',
                mime: 'image/png',
                name: 'large_telecom-logo.png',
                path: null,
                size: 15.05,
                width: 1000,
                height: 563,
              },
              small: {
                ext: '.png',
                url: '/uploads/small_telecom_logo_48ca62ad1e.png',
                hash: 'small_telecom_logo_48ca62ad1e',
                mime: 'image/png',
                name: 'small_telecom-logo.png',
                path: null,
                size: 6.2,
                width: 500,
                height: 281,
              },
              medium: {
                ext: '.png',
                url: '/uploads/medium_telecom_logo_48ca62ad1e.png',
                hash: 'medium_telecom_logo_48ca62ad1e',
                mime: 'image/png',
                name: 'medium_telecom-logo.png',
                path: null,
                size: 10.54,
                width: 750,
                height: 422,
              },
              thumbnail: {
                ext: '.png',
                url: '/uploads/thumbnail_telecom_logo_48ca62ad1e.png',
                hash: 'thumbnail_telecom_logo_48ca62ad1e',
                mime: 'image/png',
                name: 'thumbnail_telecom-logo.png',
                path: null,
                size: 2.53,
                width: 245,
                height: 138,
              },
            },
            hash: 'telecom_logo_48ca62ad1e',
            ext: '.png',
            mime: 'image/png',
            size: 32.99,
            url: '/uploads/telecom_logo_48ca62ad1e.png',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2022-04-06T13:59:54.203Z',
            updatedAt: '2022-04-06T13:59:54.203Z',
            related: {
              data: [
                {
                  id: 1,
                  attributes: {
                    __type: 'api::project.project',
                    name: 'Telecom Institucional',
                    description:
                      'El sitio institucional de Telecom. Desarrollado con NextJS, en este proyecto tuve la oportunidad de aprender a trabajar en equipo cómo también mejorar mis habilidades técnicas.',
                    date: '2022-08-23',
                    slug: 'telecom-institucional',
                    url: 'https://institucional.telecom.com.ar/',
                    github: null,
                    createdAt: '2022-04-06T14:00:04.062Z',
                    updatedAt: '2022-07-20T11:55:13.918Z',
                    publishedAt: '2022-04-06T14:00:05.595Z',
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  {
    id: 2,
    attributes: {
      name: 'Landings Telecom',
      description:
        'Estuve encargado de realizar el estilado de las principales landings de Personal. Aprendí a trabajar en múltiples proyectos al mismo tiempo.',
      date: '2021-08-23',
      slug: 'landings-telecom',
      url: 'https://www.personal.com.ar/',
      github: null,
      createdAt: '2022-04-12T12:53:13.597Z',
      updatedAt: '2022-07-30T02:06:39.653Z',
      publishedAt: '2022-07-20T11:55:38.636Z',
      content: [
        {
          id: 3,
          __component: 'sections.rich-text',
          content:
            'Landings de la que fuí parte:\n\n- [Home Personal](https://www.personal.com.ar/)\n- [Ofertas](https://www.personal.com.ar/ofertas)\n- [Planes y packs](https://www.personal.com.ar/planes-packs)\n\nMi trabajo en estos proyectos era aplicar el nuevo key visual con el objetivo de llegar a la unificación marcaria de Telecom. Los componentes venian con el HTML previamente armado (por el equipo de Telecom y Globant) listos para estilar. Había veces que se debía cambiar la estructura de estos para poder cumplir con el diseño propuesto, por lo que había que comunicarse con el equipo de desarrollo para llegar a estos cambios. \n\nPara el estilado utilizamos [SASS](https://sass-lang.com/). En estos proyectos aprendí mucho del estilado, ya que me dedicaba unicamente a esa parte. Como estabamos en constante contacto con el equipo de desarrollo para destrabar bloqueantes, mejoré mi comunicación. \n\nAl estar en múltiples proyectos a la vez, perdía mucho tiempo switcheando entre landings bajando proyectos y levantando otros. Por lo que decidí usar un  multiplexor de terminal llamado [TMUX](https://es.wikipedia.org/wiki/Tmux). Esta herramienta me permitió tenes multiples proyectos prendidos al mismo tiempo, por lo que para switchear entre proyecto solo tenía que hacer una combinación de teclas y listo. Mejoró mucho mi productividad.',
        },
      ],
      cover: {
        data: {
          id: 8,
          attributes: {
            name: 'telecom-personal.flow.png',
            alternativeText: 'telecom-personal.flow.png',
            caption: 'telecom-personal.flow.png',
            width: 1080,
            height: 1080,
            formats: {
              large: {
                ext: '.png',
                url: '/uploads/large_telecom_personal_flow_3be3e9be5a.webp',
                hash: 'large_telecom_personal_flow_3be3e9be5a',
                mime: 'image/png',
                name: 'large_telecom-personal.flow.png',
                path: null,
                size: 63.87,
                width: 1000,
                height: 1000,
              },
              small: {
                ext: '.png',
                url: '/uploads/small_telecom_personal_flow_3be3e9be5a.png',
                hash: 'small_telecom_personal_flow_3be3e9be5a',
                mime: 'image/png',
                name: 'small_telecom-personal.flow.png',
                path: null,
                size: 20.91,
                width: 500,
                height: 500,
              },
              medium: {
                ext: '.png',
                url: '/uploads/medium_telecom_personal_flow_3be3e9be5a.png',
                hash: 'medium_telecom_personal_flow_3be3e9be5a',
                mime: 'image/png',
                name: 'medium_telecom-personal.flow.png',
                path: null,
                size: 41.46,
                width: 750,
                height: 750,
              },
              thumbnail: {
                ext: '.png',
                url: '/uploads/thumbnail_telecom_personal_flow_3be3e9be5a.png',
                hash: 'thumbnail_telecom_personal_flow_3be3e9be5a',
                mime: 'image/png',
                name: 'thumbnail_telecom-personal.flow.png',
                path: null,
                size: 3.43,
                width: 156,
                height: 156,
              },
            },
            hash: 'telecom_personal_flow_3be3e9be5a',
            ext: '.png',
            mime: 'image/png',
            size: 19.5,
            url: '/uploads/telecom_personal_flow_3be3e9be5a.png',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2022-04-12T12:52:51.089Z',
            updatedAt: '2022-04-12T12:52:51.089Z',
            related: {
              data: [
                {
                  id: 2,
                  attributes: {
                    __type: 'api::project.project',
                    name: 'Landings Telecom',
                    description:
                      'Estuve encargado de realizar el estilado de las principales landings de Personal. Aprendí a trabajar en múltiples proyectos al mismo tiempo.',
                    date: '2021-08-23',
                    slug: 'landings-telecom',
                    url: 'https://www.personal.com.ar/',
                    github: null,
                    createdAt: '2022-04-12T12:53:13.597Z',
                    updatedAt: '2022-07-30T02:06:39.653Z',
                    publishedAt: '2022-07-20T11:55:38.636Z',
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  {
    id: 3,
    attributes: {
      name: 'CRM',
      description:
        'Este proyecto tiene el objetivo de gestionar pedidos, productos y clientes. ',
      date: '2022-07-29',
      slug: 'crm',
      url: 'https://crm-smoky.vercel.app/',
      github: 'https://github.com/gonza-lab/crm-react',
      createdAt: '2022-07-30T02:04:36.820Z',
      updatedAt: '2022-07-30T02:14:05.047Z',
      publishedAt: '2022-07-30T02:13:36.949Z',
      content: [],
      cover: {
        data: {
          id: 9,
          attributes: {
            name: 'Screenshot at 2022-07-29 23-12-18.png',
            alternativeText: 'Screenshot at 2022-07-29 23-12-18.png',
            caption: 'Screenshot at 2022-07-29 23-12-18.png',
            width: 1908,
            height: 906,
            formats: {
              large: {
                ext: '.png',
                url: '/uploads/large_Screenshot_at_2022_07_29_23_12_18_4add5683b3.webp',
                hash: 'large_Screenshot_at_2022_07_29_23_12_18_4add5683b3',
                mime: 'image/png',
                name: 'large_Screenshot at 2022-07-29 23-12-18.png',
                path: null,
                size: 44.87,
                width: 1000,
                height: 475,
              },
              small: {
                ext: '.png',
                url: '/uploads/small_Screenshot_at_2022_07_29_23_12_18_4add5683b3.png',
                hash: 'small_Screenshot_at_2022_07_29_23_12_18_4add5683b3',
                mime: 'image/png',
                name: 'small_Screenshot at 2022-07-29 23-12-18.png',
                path: null,
                size: 16.47,
                width: 500,
                height: 237,
              },
              medium: {
                ext: '.png',
                url: '/uploads/medium_Screenshot_at_2022_07_29_23_12_18_4add5683b3.png',
                hash: 'medium_Screenshot_at_2022_07_29_23_12_18_4add5683b3',
                mime: 'image/png',
                name: 'medium_Screenshot at 2022-07-29 23-12-18.png',
                path: null,
                size: 30.06,
                width: 750,
                height: 356,
              },
              thumbnail: {
                ext: '.png',
                url: '/uploads/thumbnail_Screenshot_at_2022_07_29_23_12_18_4add5683b3.png',
                hash: 'thumbnail_Screenshot_at_2022_07_29_23_12_18_4add5683b3',
                mime: 'image/png',
                name: 'thumbnail_Screenshot at 2022-07-29 23-12-18.png',
                path: null,
                size: 6.25,
                width: 245,
                height: 116,
              },
            },
            hash: 'Screenshot_at_2022_07_29_23_12_18_4add5683b3',
            ext: '.png',
            mime: 'image/png',
            size: 19.07,
            url: '/uploads/Screenshot_at_2022_07_29_23_12_18_4add5683b3.png',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2022-07-30T02:13:31.295Z',
            updatedAt: '2022-07-30T02:14:03.134Z',
            related: {
              data: [
                {
                  id: 3,
                  attributes: {
                    __type: 'api::project.project',
                    name: 'CRM',
                    description:
                      'Este proyecto tiene el objetivo de gestionar pedidos, productos y clientes. ',
                    date: '2022-07-29',
                    slug: 'crm',
                    url: 'https://crm-smoky.vercel.app/',
                    github: 'https://github.com/gonza-lab/crm-react',
                    createdAt: '2022-07-30T02:04:36.820Z',
                    updatedAt: '2022-07-30T02:14:05.047Z',
                    publishedAt: '2022-07-30T02:13:36.949Z',
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  const response = {
    data: projects,
    meta: {
      pagination: {
        page: 1,
        pageSize: 25,
        pageCount: 1,
        total: 3,
      },
    },
  };

  let statusCode = 200;
  const slug = _req.query['filters[slug][$eq]'];

  let project;
  if (slug) {
    project = projects.find((project) => project.attributes.slug === slug);

    if (project) {
      response.data = [project];
    } else {
      response.data = [];
      statusCode = 404;
    }
  }

  res.status(statusCode).json(response);
}
