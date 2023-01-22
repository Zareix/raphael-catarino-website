import Layout from "@components/Layout";
import { BlogPost } from "@models/BlogPost";
import { NavigationLink } from "@models/Layout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FormattedDate, FormattedMessage } from "react-intl";

type Props = {
  locale: string;
  recentPosts: BlogPost[];
};

const navLinks: NavigationLink[] = [
  {
    href: "/",
    id: "navbar_portfolio",
    defaultMessage: "Portfolio",
    description: "Navbar link portfolio",
  },
  {
    href: "/blog",
    id: "navbar_blog",
    defaultMessage: "Blog",
    description: "Navbar link blog",
  },
];

const PAGE_SIZE = 6;

const Blog = ({ locale, recentPosts }: Props) => {
  const [page, setPage] = useState(1);
  const maxPage = Math.ceil(recentPosts.length / PAGE_SIZE);

  const prev = () => {
    if (page > 1) setPage(page - 1);
  };

  const next = () => {
    if (page < maxPage) setPage(page + 1);
  };

  return (
    <Layout links={navLinks}>
      <div className="min-h-[90vh] px-8 py-20">
        <h1>
          <FormattedMessage
            id="post_recent_posts"
            defaultMessage="Posts récents"
            description="Post recent posts"
          />
        </h1>
        <div className="container mt-4 grid grid-cols-1 gap-5 md:grid-cols-3">
          {recentPosts
            .slice((page - 1) * PAGE_SIZE, (page - 1) * PAGE_SIZE + PAGE_SIZE)
            .map((post) => (
              <Link key={post.id} href={"/blog/" + post.slug}>
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
                    <FormattedDate value={post.publishedAt} /> - Raphaël G.C.
                  </p>
                </article>
              </Link>
            ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          {page > 1 && (
            <button
              className="rounded-md bg-stone-50 px-4 py-2 text-stone-900 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-slate-900 dark:text-slate-50"
              onClick={prev}
            >
              <FormattedMessage
                id="post_previous"
                defaultMessage="Précédent"
                description="Post previous"
              />
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
              <FormattedMessage
                id="post_next"
                defaultMessage="Suivant"
                description="Post next"
              />
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
