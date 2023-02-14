import Layout from "@components/Layout";
import { NavigationLink } from "@models/Layout";

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
