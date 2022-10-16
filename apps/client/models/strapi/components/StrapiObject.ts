export type StrapiObjectData<T> = {
  id: number;
  attributes: T;
};

export type StrapiSingularObject<T> = {
  data: StrapiObjectData<T>;
};

export type StrapiPluralObject<T> = {
  data: StrapiObjectData<T>[];
};
