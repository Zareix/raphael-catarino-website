export type StrapiObject<T> = {
  id: number;
  attributes: T;
};

export type StrapiSingularResponse<T> = {
  data: StrapiObject<T>;
};

export type StrapiPluralResponse<T> = {
  data: StrapiObject<T>[];
};
