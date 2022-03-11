import React, { FunctionComponent } from 'react';

import { Box, Link, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import dayjs from 'dayjs';

import NextLink from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import Project from '../../interfaces/Project';

import { Components } from '../../enums/Components';

import Markdown from '../markdown/Markdown';

const App: FunctionComponent<{ app: Project }> = ({ app }) => {
  return (
    <Box>
      <NextLink href="/">
        <Link
          href="/"
          sx={{ display: 'flex', alignItems: 'center' }}
          underline="none"
          mb={2}
        >
          <ArrowBackIcon fontSize="small" />
          Volver
        </Link>
      </NextLink>
      <Typography
        variant="h2"
        color="secondary.dark"
        component="h1"
        fontWeight={600}
      >
        <Link href={app.url} underline="hover" color="inherit" target="_blank">
          {app.title}
        </Link>
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 4 }}>
        <Typography variant="subtitle1">
          {dayjs(app.date).format('DD/MM/YYYY')}
        </Typography>
      </Box>
      {app.content.map((component) => {
        switch (component.__component) {
          case Components.RichText:
            return <Markdown key={component.id}>{component.content}</Markdown>;
          case Components.Slider:
            return (
              <Swiper
                style={{
                  height: 600,
                  marginTop: 16,
                }}
                loop
                modules={[Autoplay]}
                autoplay={{
                  delay: 2500,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
                }}
              >
                {component.images.map((image) => (
                  <SwiperSlide key={image.id}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      objectPosition="top"
                      alt={image.alternativeText}
                      src={image.url}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            );

          case Components.LargeMedia:
            console.log(component);
            return (
              <Image
                key={component.id}
                alt={component.media.alternativeText}
                height={component.media.height}
                width={component.media.width}
                src={component.media.url}
              />
            );
        }
      })}
    </Box>
  );
};

export default App;
