import React, { useContext } from 'react';

import { Typography } from '@mui/material';

import Image from 'next/image';

import Typewriter from 'typewriter-effect';

import DataContext from '../../contexts/data';

export const Hero = () => {
  const { hero } = useContext(DataContext);

  return (
    <section id="hero">
      <Image
        className="hero__img-container"
        layout="fill"
        alt={hero?.attributes.cover.data.attributes.alternativeText}
        src={hero?.attributes.cover.data.attributes.url || ''}
        priority
        quality={80}
      />
      <div className="hero__presentation">
        <Typography variant="h1">Gonzalo Flores</Typography>
        <div>
          <span>Yo soy </span>
          <Typewriter
            options={{
              strings: hero?.attributes.words.split(','),
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </section>
  );
};
