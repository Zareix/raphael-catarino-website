import type { GetStaticPropsContext, NextPage } from "next";
import { useMemo } from "react";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";

import { HomeData, HomeProps } from "@models/Home";
import { Experience } from "@models/Experience";
import { StrapiHome } from "@models/strapi/StrapiHome";
import { getStrapiMediaUrl, queryStrapiAPISingular } from "@helpers/strapi";
import HomeComponent from "@components/Home";
import { createPlaceholder } from "@helpers/plaiceholder";

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
      <HomeComponent home={home} />
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
        experiences: res.experiences.experiences.data.map(
          (x: { attributes: Experience; id: number }) => ({
            ...x.attributes,
            id: x.id,
          })
        ),
        skills: {
          ...res.skills,
          skillsDomains: await Promise.all(
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
          ),
        },
      },
    },
  };
}

export default Home;
