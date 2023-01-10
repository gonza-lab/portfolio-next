import type { NextApiRequest, NextApiResponse } from 'next';

const response = {
  data: {
    id: 1,
    attributes: {
      siteName: 'Gonzalo Flores',
      contactEmail: 'gonzaloflores358@gmail.com',
      siteLanguage: 'es',
      createdAt: '2022-04-06T14:05:50.878Z',
      updatedAt: '2022-04-06T14:05:52.309Z',
      publishedAt: '2022-04-06T14:05:52.305Z',
      socialNetworks: [
        {
          id: 1,
          title: 'LinkedIn',
          url: 'https://www.linkedin.com/in/gonzadev/',
          icon: 'logo-linkedin',
        },
        {
          id: 2,
          title: 'GitHub',
          url: 'https://github.com/gonza-lab',
          icon: 'logo-github',
        },
      ],
      avatar: {
        data: {
          id: 2,
          attributes: {
            name: 'cara.png',
            alternativeText: 'cara.png',
            caption: 'cara.png',
            width: 500,
            height: 500,
            formats: {
              thumbnail: {
                ext: '.png',
                url: '/uploads/thumbnail_cara_a35149b01a.png',
                hash: 'thumbnail_cara_a35149b01a',
                mime: 'image/png',
                name: 'thumbnail_cara.png',
                path: null,
                size: 43.86,
                width: 156,
                height: 156,
              },
            },
            hash: 'cara_a35149b01a',
            ext: '.png',
            mime: 'image/png',
            size: 87.26,
            url: '/uploads/cara_a35149b01a.webp',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2022-04-06T14:05:36.800Z',
            updatedAt: '2022-04-06T14:05:36.800Z',
          },
        },
      },
    },
  },
  meta: {},
};

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(response);
}
