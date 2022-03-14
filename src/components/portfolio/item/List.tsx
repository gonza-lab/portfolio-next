import React, { useContext } from 'react';
import { PortfolioItem } from './Item';
import { Fade } from 'react-reveal';
import DataContext from '../../../contexts/data';
import { Grid } from '@mui/material';

export const PortfolioItemList = () => {
  const { projects } = useContext(DataContext);

  return (
    <Fade>
      <Grid container justifyContent="center" gap={14}>
        {projects.map((project) => (
          <Grid item xs={12} key={project.id}>
            <PortfolioItem {...project} />
          </Grid>
        ))}
      </Grid>
    </Fade>
  );
};
