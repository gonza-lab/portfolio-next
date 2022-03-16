import Hero from '../Hero';
import { Response, ResponseData } from '../strapi/Response';

export type HeroResponse = Response<ResponseData<Hero>>;
