import React, { FC } from 'react';

import { Button, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Image from 'next/image';

import Link from '../../link/Link';

import Project from '../../../interfaces/Project';
import { ResponseData } from '../../../interfaces/strapi/Response';

export const PortfolioItem: FC<ResponseData<Project>> = ({ attributes }) => {
  return (
    <div className="portfolio-item">
      <Image
        layout="fill"
        alt={attributes.cover.data.attributes.alternativeText}
        src={attributes.cover.data.attributes.formats.large.url}
      />
      <div className="portfolio-item__details">
        <Typography
          className="portfolio-item__details-content"
          variant="body1"
          marginBottom={{ xs: '1.8rem' }}
        >
          {attributes.hero}
        </Typography>
        <Link href={`/app/${attributes.slug}`}>
          <Button variant="outlined" endIcon={<ArrowForwardIosIcon />}>
            Visitar
          </Button>
        </Link>
      </div>
      <div className="portfolio-item__overlay"></div>
    </div>
  );
};
