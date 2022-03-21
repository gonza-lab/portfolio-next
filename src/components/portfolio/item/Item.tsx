import React, { FC } from 'react';

import Image from 'next/image';

import { Box, Grid, IconButton, Typography } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

import Link from '../../link/Link';

import Project from '../../../interfaces/Project';
import { ResponseData } from '../../../interfaces/strapi/Response';

export const PortfolioItem: FC<ResponseData<Project>> = ({ attributes }) => {
  return (
    <Grid
      container
      justifyContent="center"
      gap={{
        xs: 0,
        md: 10,
      }}
      sx={{
        boxShadow: { xs: 'rgba(0, 0, 0, 0.1) 0px 0px 10px 10px', md: 'none' },
        borderRadius: { xs: '12px', md: 0 },
      }}
    >
      <Grid
        item
        md={4}
        sx={{
          position: 'relative',
          img: { borderRadius: { xs: '12px 12px 0 0', md: '12px' } },
          height: '308px',
          width: '100%',
        }}
      >
        <Image
          src={attributes.cover.data.attributes.formats.large.url}
          alt={attributes.cover.data.attributes.alternativeText}
          layout="fill"
          objectFit="cover"
        />
      </Grid>
      <Grid
        item
        container
        md={4}
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: { md: 'flex-end' },
          gap: 2,
          backgroundColor: { xs: '#e4edf9', md: 'transparent' },
          borderRadius: { xs: '0 0 12px 12px', md: 0 },
          padding: { xs: 2, md: 0 },
        }}
      >
        <Typography variant="h3" fontWeight="600" color="secondary">
          {attributes.name}
        </Typography>
        <Box
          sx={{
            backgroundColor: '#e4edf9',
            borderRadius: '10px',
            p: { md: 2 },
            width: '100%',
            textAlign: { md: 'right' },
            mt: 2,
          }}
        >
          {attributes.description}
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {['Next', 'React', 'Redux', 'MaterialUI'].map((tech) => (
            <Typography key={tech} color="#173b6c" component="span">
              {tech}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {attributes.github && (
            <IconButton href={attributes.github} target="_blank">
              <GitHubIcon />
            </IconButton>
          )}
          {attributes.url && (
            <IconButton href={attributes.url} target="_blank">
              <OpenInNewIcon />
            </IconButton>
          )}
          <Link href={`/app/${attributes.slug}`}>
            <IconButton href={`/app/${attributes.slug}`}>
              <ReadMoreIcon />
            </IconButton>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};
