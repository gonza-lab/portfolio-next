import type { NextApiRequest, NextApiResponse } from 'next';

const response = {
  data: {
    id: 1,
    attributes: {
      words: 'estudiante,desarrollador',
      createdAt: '2022-04-06T14:06:26.801Z',
      updatedAt: '2022-04-06T14:10:44.875Z',
      publishedAt: '2022-04-06T14:10:44.873Z',
      cover: {
        data: {
          id: 3,
          attributes: {
            name: 'stars-1.jpg',
            alternativeText: 'stars-1.jpg',
            caption: 'stars-1.jpg',
            width: 6000,
            height: 4000,
            formats: {
              large: {
                ext: '.jpg',
                url: '/uploads/large_stars_1_a6482460c3.jpg',
                hash: 'large_stars_1_a6482460c3',
                mime: 'image/jpeg',
                name: 'large_stars-1.jpg',
                path: null,
                size: 60.48,
                width: 1000,
                height: 667,
              },
              small: {
                ext: '.jpg',
                url: '/uploads/small_stars_1_a6482460c3.jpg',
                hash: 'small_stars_1_a6482460c3',
                mime: 'image/jpeg',
                name: 'small_stars-1.jpg',
                path: null,
                size: 10.08,
                width: 500,
                height: 333,
              },
              medium: {
                ext: '.jpg',
                url: '/uploads/medium_stars_1_a6482460c3.jpg',
                hash: 'medium_stars_1_a6482460c3',
                mime: 'image/jpeg',
                name: 'medium_stars-1.jpg',
                path: null,
                size: 29.3,
                width: 750,
                height: 500,
              },
              thumbnail: {
                ext: '.jpg',
                url: '/uploads/thumbnail_stars_1_a6482460c3.jpg',
                hash: 'thumbnail_stars_1_a6482460c3',
                mime: 'image/jpeg',
                name: 'thumbnail_stars-1.jpg',
                path: null,
                size: 1.52,
                width: 234,
                height: 156,
              },
            },
            hash: 'stars_1_a6482460c3',
            ext: '.jpg',
            mime: 'image/jpeg',
            size: 803.16,
            url: '/uploads/stars_1_a6482460c3.webp',
            previewUrl: null,
            provider: 'local',
            provider_metadata: null,
            createdAt: '2022-04-06T14:06:23.564Z',
            updatedAt: '2022-04-06T14:06:23.564Z',
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
