import Global from '../Global';
import { Response, ResponseData } from '../strapi/Response';

export type GlobalResponse = Response<ResponseData<Global>>;
