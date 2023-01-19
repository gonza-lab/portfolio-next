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
import { ResponseData } from '../../interfaces/strapi/Response';

const App: FunctionComponent<{ app: ResponseData<Project> }> = ({ app }) => {
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
        <Link
          href={app.attributes.url}
          underline="hover"
          color="inherit"
          target="_blank"
        >
          {app.attributes.name}
        </Link>
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 4 }}>
        <Typography variant="subtitle1">
          {dayjs(app.attributes.date).format('DD/MM/YYYY')}
        </Typography>
      </Box>
      {app.attributes.content.map((component) => {
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
                {component.images.data.map((image) => (
                  <SwiperSlide key={image.id}>
                    <Image
                      layout="fill"
                      objectFit="cover"
                      objectPosition="top"
                      alt={image.attributes.alternativeText}
                      src={image.attributes.url}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            );

          case Components.LargeMedia:
            return (
              <Image
                key={component.id}
                alt={component.media.data.attributes.alternativeText}
                height={component.media.data.attributes.height}
                width={component.media.data.attributes.width}
                src={component.media.data.attributes.url}
              />
            );
        }
      })}
    </Box>
  );
};

export default App;
