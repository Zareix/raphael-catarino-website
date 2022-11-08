import type { GetStaticPropsContext, NextPage } from "next";
import { useMemo } from "react";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";

import { HomeData } from "@models/Home";
import { StrapiHome } from "@models/strapi/StrapiHome";
import { getStrapiMediaUrl, queryStrapiAPISingular } from "@helpers/strapi";
import HomeComponent, { HomeProps } from "@components/Home";
import { createPlaceholder } from "@helpers/plaiceholder";
import { sortByRank } from "@helpers/sort";

import English from "../lang/compiled/en.json";
import French from "../lang/compiled/fr.json";

const Home: NextPage<HomeProps> = ({ home }: HomeProps) => {
  const router = useRouter();
  const locale = router.locale ?? "fr";

  const messages = useMemo(() => {
    switch (locale) {
      case "en":
        return English;
      case "fr":
        return French;
      default:
        return French;
    }
  }, [locale]);

  if (!home) return <></>;

  return (
    <IntlProvider messages={messages} locale={locale} defaultLocale="fr">
      <HomeComponent home={home} locale={locale} />
    </IntlProvider>
  );
};

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
