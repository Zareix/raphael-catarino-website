import { Metadata } from "next";
import Layout from "@components/Layout";
import { NavigationLink } from "@models/Layout";
import generateSEO from "@components/SEO/";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const lang = (await import(`../../../lang/${params.locale}.json`)).default;
  return generateSEO(
    params.locale,
    lang.seo.blog.title,
    lang.seo.blog.description
  );
}

const navLinks: NavigationLink[] = [
  {
    href: "/",
    id: "portfolio",
    defaultMessage: "Portfolio",
    description: "Navbar link portfolio",
  },
  {
    href: "/blog",
    id: "blog",
    defaultMessage: "Blog",
    description: "Navbar link blog",
  },
];

export default function BlogIndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout links={navLinks} linkQuery="blog">
      {children}
    </Layout>
  );
}
