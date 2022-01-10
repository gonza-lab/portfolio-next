import * as React from 'react';
import DataService from '../services/DataService';
import DataContext from '../contexts/data';
import { Element } from 'react-scroll';
import { Hero } from '../components/hero/Hero';
import { About } from '../components/about/About';
import { Portfolio } from '../components/portfolio/Portfolio';
import BasicLayout from '../components/templates/BasicLayout';
import HeroInterface from '../interfaces/Hero';
import Global from '../interfaces/Global';
import Project from '../interfaces/Project';
import AboutInterface from '../interfaces/About';
import { Box } from '@mui/material';

interface Props {
  data: {
    hero: HeroInterface;
    global: Global;
    projects: Project[];
    about: AboutInterface;
  };
}

export async function getServerSideProps() {
  const dataService = new DataService();

  const hero = await dataService.getHero();
  const global = await dataService.getGlobal();
  const about = await dataService.getAbout();
  const projects = await dataService.getProjects();

  return {
    props: {
      data: {
        global,
        hero,
        about,
        projects,
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
            <Element name="about" className="section">
              <About />
            </Element>
            <Element name="portfolio" className="section">
              <Portfolio />
            </Element>
          </main>
        </Box>
      </BasicLayout>
    </DataContext.Provider>
  );
}
