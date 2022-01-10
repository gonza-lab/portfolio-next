import React from 'react';

import { Button, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import PropTypes from 'prop-types';

import Image from 'next/image';

import Link from '../../link/Link';

import Project from '../../../interfaces/Project';

export const PortfolioItem = ({ coverImage, hero, slug }: Project) => {
  return (
    <div className="portfolio-item">
      <Image
        layout="fill"
        alt={coverImage.alternativeText}
        src={coverImage.formats.large.url}
      />
      <div className="portfolio-item__details">
        <Typography
          className="portfolio-item__details-content"
          variant="body1"
          marginBottom={{ xs: '1.8rem' }}
        >
          {hero}
        </Typography>
        <Link href={`/app/${slug}`}>
          <Button variant="outlined" endIcon={<ArrowForwardIosIcon />}>
            Visitar
          </Button>
        </Link>
      </div>
      <div className="portfolio-item__overlay"></div>
    </div>
  );
};

PortfolioItem.propTypes = {
  app: PropTypes.string,
};
