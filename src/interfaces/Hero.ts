import Image from './strapi/Image';
import { ResponseData } from './strapi/Response';

export default interface Hero {
  words: string;
  cover: { data: ResponseData<Image> };
}
