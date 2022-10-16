import { StrapiSingularObject } from "./components/StrapiObject";
import { StrapiMedia, StrapiImage } from "./components/StrapiMedia";

export type StrapiHome = {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  hero: {
    id: number;
    title: string;
    subtitle?: string;
    biography: string;
    profilePicture: StrapiSingularObject<StrapiImage>;
    CV: StrapiSingularObject<StrapiMedia>;
  };
  experiences: {
    id: number;
    title: string;
    subtitle?: string;
    experiences: {
      data: [];
    };
  };
  skills: {
    id: number;
    title: string;
    subtitle?: string;
    skillsDomains: {
      data: [
        {
          id: number;
          attributes: {
            title: string;
            createdAt: Date;
            updatedAt: Date;
            publishedAt: Date;
            locale: string;
            skills: [
              {
                id: number;
                name: string;
                icon: StrapiSingularObject<StrapiImage>;
              }
            ];
            localizations: {
              data: [
                {
                  id: number;
                  attributes: {
                    title: string;
                    createdAt: Date;
                    updatedAt: Date;
                    publishedAt: Date;
                    locale: string;
                  };
                }
              ];
            };
          };
        }
      ];
    };
  };
  localizations: {
    data: [
      {
        id: number;
        attributes: {
          createdAt: Date;
          updatedAt: Date;
          publishedAt: Date;
          locale: string;
        };
      }
    ];
  };
};
