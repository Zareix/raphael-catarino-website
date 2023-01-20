import type { GetStaticPropsContext, NextPage } from "next";
import { HomeData } from "@models/Home";
import { StrapiHome } from "@models/strapi/StrapiHome";
import { getStrapiMediaUrl, queryStrapiAPISingular } from "@helpers/strapi";
import { createPlaceholder } from "@helpers/plaiceholder";
import { sortByRank } from "@helpers/sort";
import HomeComponent, { HomeProps } from "@components/Home";
import SEO from "@components/SEO";
import IntlProviderWrapper from "@components/IntlProviderWrapper/IntlProviderWrapper";

const Home: NextPage<HomeProps> = ({ locale, home }: HomeProps) => (
  <IntlProviderWrapper locale={locale}>
    <SEO />
    <HomeComponent home={home} locale={locale} />
  </IntlProviderWrapper>
);

export async function getStaticProps({
  locale,
}: GetStaticPropsContext): Promise<{
  props: { home: HomeData; locale: string };
}> {
  const {
    data: { attributes: res },
  } = await queryStrapiAPISingular<StrapiHome>(locale ?? "fr", "home");

  return {
    props: {
      locale: locale ?? "fr",
      home: {
        hero: {
          ...res.hero,
          profilePicture: {
            ...res.hero.profilePicture.data.attributes,
            url: getStrapiMediaUrl(res.hero.profilePicture.data.attributes.url),
            placeHolder: await createPlaceholder(
              res.hero.profilePicture.data.attributes.url
            ),
          },
          CV: {
            ...res.hero.CV.data.attributes,
            url: getStrapiMediaUrl(res.hero.CV.data.attributes.url),
          },
        },
        experiences: {
          ...res.experiences,
          experiences: (
            await Promise.all(
              res.experiences.experiences.data.map(async (e) => ({
                ...e.attributes,
                id: e.id,
                icon: {
                  ...e.attributes.icon.data.attributes,
                  url: getStrapiMediaUrl(e.attributes.icon.data.attributes.url),
                  placeHolder: await createPlaceholder(
                    e.attributes.icon.data.attributes.url
                  ),
                },
              }))
            )
          ).sort(sortByRank),
        },
        skills: {
          ...res.skills,
          skillsDomains: (
            await Promise.all(
              res.skills.skillsDomains.data.map(async (domain) => ({
                ...domain.attributes,
                skills: await Promise.all(
                  domain.attributes.skills.map(async (s) => ({
                    ...s,
                    icon: {
                      ...s.icon.data.attributes,
                      url: getStrapiMediaUrl(s.icon.data.attributes.url),
                      placeHolder: await createPlaceholder(
                        s.icon.data.attributes.url
                      ),
                    },
                  }))
                ),
                id: domain.id,
              }))
            )
          ).sort(sortByRank),
        },
        projects: {
          title: res.projects.title,
          subtitle: res.projects.subtitle,
          projects: (
            await Promise.all(
              res.projects.projects.data.map(async (p) => ({
                id: p.id,
                title: p.attributes.title,
                featuredImage: {
                  ...p.attributes.featuredImage.data.attributes,
                  url: getStrapiMediaUrl(
                    p.attributes.featuredImage.data.attributes.url
                  ),
                  placeHolder: await createPlaceholder(
                    p.attributes.featuredImage.data.attributes.url
                  ),
                },
                date: p.attributes.date,
                description: p.attributes.description,
                websiteURL: p.attributes.websiteURL,
                sourceCodeURL: p.attributes.sourceCodeURL,
                rank: p.attributes.rank,
                technologies: await Promise.all(
                  p.attributes.technologies.map(async (t) => ({
                    id: t.id,
                    name: t.name,
                  }))
                ),
              }))
            )
          ).sort(sortByRank),
        },
      },
    },
  };
}

export default Home;
