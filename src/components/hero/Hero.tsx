import { Typography } from '@mui/material';
import Image from 'next/image';
import React, { useContext } from 'react';
import Typewriter from 'typewriter-effect';
import DataContext from '../../contexts/data';

export const Hero = () => {
  const { hero } = useContext(DataContext);

  return (
    <section id="hero">
      <Image
        className="hero__img-container"
        layout="fill"
        alt={hero?.cover.alternativeText}
        src={hero?.cover.url || ''}
        priority
        quality={80}
      />
      <div className="hero__presentation">
        <Typography variant="h1">Gonza Flores :D</Typography>
        <div>
          <span>Yo soy </span>
          <Typewriter
            options={{
              strings: hero?.words.map(({ word }) => word),
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </section>
  );
};
