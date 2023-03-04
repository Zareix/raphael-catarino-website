import { BlogPost } from "@models/BlogPost";
import Image from "next/image";
import Aside from "./Aside";
import Content from "./Content";

type Props = {
  post: BlogPost;
  recentPosts: BlogPost[];
  locale: string;
};

const Post = ({ post, recentPosts, locale }: Props) => {
  return (
    <div className="container mb-8 min-h-[90vh] pt-10 md:p-4 md:pt-24 lg:flex">
      <article className="min-h-[85vh] overflow-hidden bg-white dark:bg-slate-900 md:rounded-xl lg:w-4/5">
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
          <h1 className="text-4xl">{post.title}</h1>
          <h2 className="font-medium">{post.description}</h2>
          <p className="mt-2 text-sm italic opacity-70">
            {new Date(post.publishedAt).toLocaleDateString([locale])} - Raphaël
            G.C.
          </p>
        </div>
        <hr className="mx-auto my-4 w-11/12" />
        <Content post={post} />
      </article>
      <Aside recentPosts={recentPosts} />
    </div>
  );
};

export default Post;
