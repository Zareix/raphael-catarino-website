"use client";
import LocalizedLink from "@helpers/LocalizedLink";
import { BlogPost } from "@models/BlogPost";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

type Props = {
  locale: string;
  recentPosts: BlogPost[];
};

const PAGE_SIZE = 6;

const Blog = ({ locale, recentPosts }: Props) => {
  const t = useTranslations();
  const [page, setPage] = useState(1);
  const maxPage = Math.ceil(recentPosts.length / PAGE_SIZE);

  const prev = () => {
    if (page > 1) setPage(page - 1);
  };

  const next = () => {
    if (page < maxPage) setPage(page + 1);
  };

  return (
    <>
      <div className="min-h-[90vh] px-8 py-20">
        <h1>{t("blog.recents")}</h1>
        <div className="container mt-4 grid grid-cols-1 gap-5 md:grid-cols-3">
          {recentPosts
            .slice((page - 1) * PAGE_SIZE, (page - 1) * PAGE_SIZE + PAGE_SIZE)
            .map((post) => (
              <LocalizedLink key={post.id} href={"/blog/" + post.slug}>
                <article className="relative h-full overflow-hidden rounded-lg border border-stone-300 bg-stone-50 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
                  <div className="relative h-32 w-full">
                    <Image
                      src={post.featuredImage.url}
                      fill
                      alt={post.featuredImage.alternativeText}
                      sizes="(max-width: 640px) 100vw, 400px"
                      placeholder="blur"
                      blurDataURL={post.featuredImage.placeHolder}
                      className="object-cover"
                      quality={100}
                    />
                  </div>
                  <div className="mx-4 mt-3 mb-9 text-justify">
                    <h2>{post.title}</h2>
                    <h3>{post.description}</h3>
                  </div>
                  <p className=" absolute bottom-2 right-4 text-right text-sm italic opacity-70">
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString([locale])}
                    </span>{" "}
                    - Raphaël G.C.
                  </p>
                </article>
              </LocalizedLink>
            ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          {page > 1 && (
            <button
              className="rounded-md bg-stone-50 px-4 py-2 text-stone-900 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-slate-900 dark:text-slate-50"
              onClick={prev}
            >
              Précédent
            </button>
          )}
          <p className="font-medium">
            {page} / {maxPage}
          </p>
          {page < maxPage && (
            <button
              className="rounded-md bg-stone-50 px-4 py-2 text-stone-900 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-slate-900 dark:text-slate-50"
              onClick={next}
            >
              Suivant
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
