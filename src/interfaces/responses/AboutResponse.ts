import About from '../About';
import { Response, ResponseData } from '../strapi/Response';

export type AboutResponse = Response<ResponseData<About>>;
