"use client";
import SvgFavicon from "@components/ui/SvgFavicon";
import { LangSelector } from "../LangSelector";
import { NavigationLink } from "@models/Layout";
import { NavLink } from "./Navlink";
import { useTranslations } from "next-intl";

type Props = {
  links: NavigationLink[];
  linkQuery: string;
};

const Navbar = ({ links, linkQuery }: Props) => {
  const t = useTranslations("navbar");
  return (
    <nav className="slideInTop mx-auto mt-0 hidden w-max items-center justify-center rounded-b-lg border border-gray-50 border-opacity-10 bg-slate-50 bg-opacity-50 px-3 py-2 shadow-sm backdrop-blur-lg dark:bg-slate-800  dark:bg-opacity-70 md:flex">
      <a
        className="relative h-10 w-10"
        href="#hero"
        aria-label="Raphaël Catarino logo"
      >
        <SvgFavicon />
      </a>
      <ul className="ml-10 flex items-center gap-6">
        {links.map((link) =>
          link.href.startsWith("#") ? (
            <li key={link.id}>
              <NavLink href={link.href} as="a">
                {t(link.id)}
              </NavLink>
            </li>
          ) : (
            <li key={link.id}>
              <NavLink href={link.href}>{t(link.id)}</NavLink>
            </li>
          )
        )}
        <li>
          <NavLink href="/">{t("contact")}</NavLink>
        </li>
        <li>
          <LangSelector linkQuery={linkQuery} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
