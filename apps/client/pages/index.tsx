import type { GetStaticPropsContext, NextPage } from "next";
import { useMemo } from "react";
import { IntlProvider } from "react-intl";

import { HomeData, HomeProps } from "@models/Home";
import { Experience } from "@models/Experience";
import { getStrapiMedia, queryStrapiAPISingular } from "@helpers/strapi";
import HomeComponent from "@components/Home";
import { createPlaceholder } from "@helpers/plaiceholder";

import English from "../lang/compiled/en.json";
import French from "../lang/compiled/fr.json";
import { useRouter } from "next/router";

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
  const res = await queryStrapiAPISingular(locale ?? "fr", "home");

  return {
    props: {
      locale: locale ?? "fr",
      home: {
        hero: {
          ...res.hero,
          profilePicture: {
            ...res.hero.profilePicture.data.attributes,
            url: getStrapiMedia(res.hero.profilePicture.data.attributes.url),
            placeHolder: await createPlaceholder(
              res.hero.profilePicture.data.attributes.url
            ),
          },
          CV: {
            ...res.hero.CV.data.attributes,
            url: getStrapiMedia(res.hero.CV.data.attributes.url),
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
                    url: getStrapiMedia(s.icon.data.attributes.url),
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
