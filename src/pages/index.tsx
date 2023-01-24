import * as React from 'react';
import { Element } from 'react-scroll';
import { Box } from '@mui/material';

import DataService from '../services/DataService';
import DataContext, { IDataContext } from '../contexts/data';

import BasicLayout from '../components/templates/BasicLayout';
import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';
import { Portfolio } from '../components/portfolio/Portfolio';

interface Props {
  data: IDataContext;
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const dataService = new DataService();

  const global = await dataService.getGlobal();
  const hero = await dataService.getHero();
  const projects = await dataService.getProjects();
  const about = await dataService.getAbout();

  return {
    props: {
      data: {
        global,
        hero,
        projects,
        about,
      },
    }, // will be passed to the page component as props
  };
}

export default function Index({ data }: Props) {
  return (
    <DataContext.Provider value={{ ...data }}>
      <BasicLayout>
        <Box>
          <Element name="home" className="section">
            <Hero />
          </Element>
          <main>
            <Element name="portfolio" className="section">
              <Portfolio />
            </Element>
            <Element name="about" className="section">
              <About />
            </Element>
          </main>
        </Box>
      </BasicLayout>
    </DataContext.Provider>
  );
}
