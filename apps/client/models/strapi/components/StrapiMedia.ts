export type StrapiMedia = {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
};

export type StrapiImage = StrapiMedia & {
  placeHolder: string;
};
