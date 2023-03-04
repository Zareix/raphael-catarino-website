"use client";
import LocalizedLink from "@helpers/LocalizedLink";
import { BlogPost } from "@models/BlogPost";
import { useTranslations } from "next-intl";

type Props = {
  recentPosts: BlogPost[];
};

const Aside = ({ recentPosts }: Props) => {
  const t = useTranslations();
  return (
    <aside className="p-4">
      <h2>{t("blog.recents")}</h2>
      {recentPosts.length > 0 ? (
        <ul>
          {recentPosts.map((p) => (
            <LocalizedLink href={`/blog/${p.slug}`} key={p.id}>
              <li>{p.title}</li>
            </LocalizedLink>
          ))}
        </ul>
      ) : (
        <p>Aucun posts récents</p>
      )}
    </aside>
  );
};

export default Aside;
