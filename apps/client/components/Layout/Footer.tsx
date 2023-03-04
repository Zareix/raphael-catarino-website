"use client";
import SvgFavicon from "@components/ui/SvgFavicon";
import { useTranslations } from "next-intl";
import { NavLinkFooter } from "./Navbar/Navlink";

const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="border-t border-gray-300 bg-gray-100 py-8 dark:border-gray-700 dark:bg-gray-800 md:py-16">
      <div className="container grid grid-cols-4 gap-6 px-4 md:px-8">
        <ul className="grid gap-2 px-4">
          <li>
            <h3 className="font-bold hover:underline dark:text-gray-300">
              <a href="#">{t("navbar.home")}</a>
            </h3>
          </li>
          <li>
            <NavLinkFooter href="#experiences">
              {t("navbar.experiences")}
            </NavLinkFooter>
          </li>
          <li>
            <NavLinkFooter href="#skills">{t("navbar.skills")}</NavLinkFooter>
          </li>
          <li>
            <NavLinkFooter href="#projects">
              {t("navbar.projects")}
            </NavLinkFooter>
          </li>
          <li>
            <NavLinkFooter as="button">{t("navbar.contact")}</NavLinkFooter>
          </li>
        </ul>
        <hr className="col-span-4 dark:border-gray-400" />
        <div className="px-4">
          <div className="relative h-12 w-12">
            <SvgFavicon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
