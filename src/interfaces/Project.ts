import { Component } from './strapi/components/Components';
import Image from './strapi/Image';
import { ResponseData } from './strapi/Response';

export default interface Project {
  name: string;
  description: string;
  date: Date;
  content: Component[];
  cover: {
    data: ResponseData<Image>;
  };
  slug: string;
  hero: string;
  url?: string;
}
