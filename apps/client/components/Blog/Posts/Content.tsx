"use client";

import { BlogPost } from "@models/BlogPost";
import Image from "next/image";
import { HTMLAttributes, ImgHTMLAttributes } from "react";
import { useRemarkSync } from "react-remark";
import CodeBlock from "./CodeBlock";

type Props = {
  post: BlogPost;
};

const Content = ({ post }: Props) => {
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
  return <div className="mb-4 px-6">{reactContent}</div>;
};

export default Content;
