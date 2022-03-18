import Image from './strapi/Image';
import { ResponseData } from './strapi/Response';

interface SocialNetwork {
  id: number;
  title: string;
  url: string;
  icon: 'logo-linkedin' | 'logo-github';
}

export default interface Global {
  id: number;
  siteName: string;
  contactEmail: string;
  siteLanguage: string;
  socialNetworks: SocialNetwork[];
  avatar: { data: ResponseData<Image> };
}
