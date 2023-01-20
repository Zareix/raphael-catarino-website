import Layout from "@components/Layout";
import { BlogPost } from "@models/BlogPost";
import { NavigationLink } from "@models/Layout";
import Image from "next/image";
import { HTMLAttributes, ImgHTMLAttributes } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useRemarkSync } from "react-remark";

type Props = {
  post: BlogPost;
  recentPosts: BlogPost[];
};

const navLinks: NavigationLink[] = [
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
            className="mx-auto my-4 w-3/4 rounded-lg object-contain"
            sizes="60vw"
          />
        ),
      },
    },
  });

  return (
    <Layout links={navLinks}>
      <div className="container mt-20 mb-8 min-h-[90vh] p-4 md:flex">
        <article className="overflow-hidden rounded-xl bg-white md:w-4/5">
          <div className="relative h-64 w-full">
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alternativeText}
              fill
              placeholder="blur"
              blurDataURL={post.featuredImage.placeHolder}
              className="object-cover"
              sizes="90vw"
            />
          </div>
          <h1 className="mx-6 mt-4 text-5xl">{post.title}</h1>
          <hr className="mx-auto my-4 w-11/12" />
          <div className="mb-4 px-6">{reactContent}</div>
        </article>
        <aside className="p-4">
          <h2>Recent Posts</h2>
          <ul>
            <li>t</li>
          </ul>
        </aside>
      </div>
    </Layout>
  );
};

export default Post;
