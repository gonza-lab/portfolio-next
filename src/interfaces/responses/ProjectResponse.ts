import Project from '../Project';
import { Response, ResponseData } from '../strapi/Response';

export type ProjectResponse = Response<ResponseData<Project>[]>;
