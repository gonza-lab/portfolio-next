import React, { FC } from 'react';

import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Image from 'next/image';

import Link from '../../link/Link';

import Project from '../../../interfaces/Project';

import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

// export const PortfolioItem = ({ coverImage, hero, slug, ...rest }: Project) => {
//   return (
//     <div className="portfolio-item">
//       <Image
//         layout="fill"
//         alt={coverImage.alternativeText}
//         src={coverImage.formats.large.url}
//       />
//       <div className="portfolio-item__details">
//         <Typography
//           className="portfolio-item__details-content"
//           variant="body1"
//           marginBottom={{ xs: '1.8rem' }}
//         >
//           {hero}
//         </Typography>
//         <Link href={`/app/${slug}`}>
//           <Button variant="outlined" endIcon={<ArrowForwardIosIcon />}>
//             Visitar
//           </Button>
//         </Link>
//       </div>
//       <div className="portfolio-item__overlay"></div>
//     </div>
//   );
// };

export const PortfolioItem: FC<Project> = ({
  name,
  coverImage,
  description,
}) => {
  return (
    <Grid
      container
      sx={{
        height: '308px',
      }}
      justifyContent="center"
      gap={10}
    >
      <Grid
        item
        md={4}
        sx={{
          position: 'relative',
          img: { borderRadius: '12px' },
        }}
      >
        <Image
          src={coverImage.formats.large.url}
          alt={coverImage.alternativeText}
          layout="fill"
          objectFit="cover"
        />
      </Grid>
      <Grid
        item
        container
        md={4}
        direction="column"
        justifyContent="center"
        alignItems="flex-end"
        gap={2}
      >
        <Typography variant="h3" fontWeight="600" color="secondary">
          {name}
        </Typography>
        <Box
          sx={{
            backgroundColor: '#e4edf9',
            borderRadius: '10px',
            p: 2,
            width: '100%',
            textAlign: 'right',
            mt: 2,
          }}
        >
          {description}
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {['Next', 'React', 'Redux', 'MaterialUI'].map((tech) => (
            <Typography key={tech} color="#173b6c" component="span">
              {tech}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <OpenInNewIcon />
          </IconButton>
          <IconButton>
            <ReadMoreIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};
