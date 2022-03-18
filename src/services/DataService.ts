import ApiService from './ApiService';

import About from '../interfaces/About';
import Global from '../interfaces/Global';
import Hero from '../interfaces/Hero';
import Project from '../interfaces/Project';

import { AboutResponse } from '../interfaces/responses/AboutResponse';
import { GlobalResponse } from '../interfaces/responses/GlobalResponse';
import { HeroResponse } from '../interfaces/responses/HeroResponse';
import { ProjectResponse } from '../interfaces/responses/ProjectResponse';

import GetProjectParams from '../interfaces/strapi/requests/GetProjectParams';
import { ResponseData } from '../interfaces/strapi/Response';

export default class DataService extends ApiService {
  constructor() {
    super();
  }

  async getHero(): Promise<ResponseData<Hero>> {
    const { data } = await this.axios.get<HeroResponse>('/hero', {
      params: { populate: '*' },
    });

    return data.data;
  }

  async getAbout(): Promise<ResponseData<About>> {
    const { data } = await this.axios.get<AboutResponse>('/about', {
      params: { populate: '*' },
    });

    return data.data;
  }

  async getProjects(
    params?: GetProjectParams
  ): Promise<ResponseData<Project>[]> {
    const { data } = await this.axios.get<ProjectResponse>(
      '/projects?_sort=order:ASC',
      {
        params: {
          ...params,
          populate: {
            content: {
              populate: '*',
            },
            cover: {
              populate: '*',
            },
          },
        },
      }
    );

    return data.data;
  }

  async getGlobal(): Promise<ResponseData<Global>> {
    const { data } = await this.axios.get<GlobalResponse>('/global', {
      params: { populate: '*' },
    });

    return data.data;
  }
}
