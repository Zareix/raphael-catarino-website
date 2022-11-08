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
      data: [
        {
          id: number;
          attributes: {
            title: string;
            entreprise: string;
            url: string;
            createdAt: Date;
            updatedAt: Date;
            publishedAt: Date;
            date: string;
            locale: string;
            icon: StrapiSingularObject<StrapiImage>;
            localizations: {
              data: [];
            };
          };
        }
      ];
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
  projects: {
    id: number;
    title: string;
    subtitle: string;
    projects: {
      data: [
        {
          id: 1;
          attributes: {
            title: string;
            date: Date;
            description: string;
            websiteURL: string;
            sourceCodeURL: string;
            createdAt: Date;
            updatedAt: Date;
            publishedAt: Date;
            locale: string;
            featuredImage: StrapiSingularObject<StrapiImage>;
            technologies: [
              {
                id: number;
                name: string;
              }
            ];
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
