import Layout from "@components/Layout";
import { BlogPost } from "@models/BlogPost";
import { NavigationLink } from "@models/Layout";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes, ImgHTMLAttributes } from "react";
import { FormattedDate, FormattedMessage } from "react-intl";
import { useRemarkSync } from "react-remark";
import Aside from "./Aside";
import CodeBlock from "./CodeBlock";

type Props = {
  post: BlogPost;
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

const Post = ({ post, recentPosts }: Props) => {
  const reactContent = useRemarkSync(post.content, {
    rehypeReactOptions: {
      components: {
        p: (props: HTMLAttributes<HTMLParagraphElement>) => (
          <p {...props} className="relative" />
        ),
        img: (props: ImgHTMLAttributes<HTMLImageElement>) => (
          <Image
            src={props.src ?? ""}
            alt={props.alt ?? ""}
            width={500}
            height={500}
            className="mx-auto my-4 rounded-md object-contain md:w-3/4"
            sizes="(max-width: 640px) 95vw, 70vw"
            quality={100}
          />
        ),
        code: CodeBlock,
      },
    },
  });

  return (
    <Layout links={navLinks} linkQuery={{ slug: post.slug }}>
      <div className="container mb-8 min-h-[90vh] pt-10 md:p-4 md:pt-20 lg:flex">
        <article className="overflow-hidden bg-white dark:bg-slate-900 md:rounded-xl lg:w-4/5">
          <div className="relative h-64 w-full">
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alternativeText}
              fill
              placeholder="blur"
              blurDataURL={post.featuredImage.placeHolder}
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 70vw"
              quality={100}
            />
          </div>
          <div className="mx-6 mt-4">
            <h1 className="text-5xl">{post.title}</h1>
            <h2 className="font-medium">{post.description}</h2>
            <p className="mt-2 text-sm italic opacity-70">
              <FormattedDate value={post.publishedAt} /> - Raphaël G.C.
            </p>
          </div>
          <hr className="mx-auto my-4 w-11/12" />
          <div className="mb-4 px-6">{reactContent}</div>
        </article>
        <Aside recentPosts={recentPosts} />
      </div>
    </Layout>
  );
};

export default Post;
