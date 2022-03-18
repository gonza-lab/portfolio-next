import React from 'react';
import About from '../interfaces/About';
import Global from '../interfaces/Global';
import Hero from '../interfaces/Hero';
import Project from '../interfaces/Project';
import { ResponseData } from '../interfaces/strapi/Response';

export interface IDataContext {
  about?: ResponseData<About>;
  hero?: ResponseData<Hero>;
  global: ResponseData<Global>;
  projects: ResponseData<Project>[];
}

export interface IDataContextProject {
  global: ResponseData<Global>;
  projects: ResponseData<Project>[];
}

const DataContext = React.createContext<IDataContext>({} as IDataContext);

export default DataContext;
