import type { NextApiRequest, NextApiResponse } from 'next';

const response = {
  data: {
    id: 1,
    attributes: {
      content:
        'Soy desarrollador fullstack. Uno de mis objetivos día a día es ser mejor que antes. Soy una persona a la que le gusta mucho los desafíos. Conocí el mundo del desarrollo web a mediados del 2020, cuando unos compañeros me invitaron a un proyecto cuyo cual objetivo era desarrollar una pagina web. En ese proyecto conocí tecnologías como ReactJS y NodeJS, y desde ese momento supe que me quería dedicar a esto. Si quieren ver mis proyectos los podrán encontrar en mi [GitHub](https://github.com/gonza-lab?tab=repositories).\n',
      skills:
        '- **Front end**: React, Angular, Sass.\n  - React: Esta librería fue la primera en mi camino como desarrollador web. Es mi área de expertise, donde mejor me manejo y más conocimientos tengo. Tengo experiencia con Next (SSR - SSG), Redux, testing con Jest.\n  - Angular: Cuando comencé a trabajar en Esto Es, aprendí angular. Es un framework que en lo personal, me gusta mucho. En este momento me estoy capacitando para llevar mis bases al siguiente nivel. Angular lo trabajé en conjunto con [NgZorro](https://ng.ant.design/docs/introduce/en).\n- **Back-End**: NodeJS, Express, NestJS\n- **Soft-skills**: Comunicación, trabajo en equipo, adaptabilidad, aprendizaje, proactividad, profesionalismo. Una de las cosas que mas me gustó a la hora de empezar a trabajar en un equipo, es tener compañeros. Me gusta estar rodeado de personas que les apasiona la programación, y tienen un objetivo. Me gusta poder ayudar a mis compañeros a superar bloqueantes, y también ser un líder, es a lo que apunto. Si bien tengo poca experiencia en este mundo, me gustaría aprender mas y llegar a eso. Considero que las Soft Skills son muy importantes a la hora de trabajar, tanto como las habilidades técnicas. Cada día intento mejorar aunque sea un poquito estas habilidades.\n- **Bases de datos:** MySQL, MongoDB.\n- **Sistemas operativos**: Linux.\n- **DevOps**: DigitalOcean (Droplets), AWS (EC2).',
      createdAt: '2022-04-06T14:05:03.595Z',
      updatedAt: '2022-04-06T14:05:05.863Z',
      publishedAt: '2022-04-06T14:05:05.859Z',
    },
  },
  meta: {},
};

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(response);
}
