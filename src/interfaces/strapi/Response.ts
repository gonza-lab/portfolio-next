interface Attributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface ResponseData<T> {
  id: number;
  attributes: Attributes & T;
}

export interface Response<T> {
  data: T;
  meta: object;
}
