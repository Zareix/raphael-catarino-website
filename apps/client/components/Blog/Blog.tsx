import Layout from "@components/Layout";
import { BlogPost } from "@models/BlogPost";
import { NavigationLink } from "@models/Layout";
import Link from "next/link";

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

const Blog = ({ locale, recentPosts }: Props) => {
  return (
    <Layout links={navLinks}>
      <div className="mt-20">
        {recentPosts.map((post) => (
          <div key={post.id}>
            <Link href={"/blog/" + post.slug}>{post.title}</Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
