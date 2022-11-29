import React from "react";

import { FormattedMessage } from "react-intl";
import styled from "styled-components";

import SvgFavicon from "@components/ui/SvgFavicon";
import { useHomeContext } from "@components/Home";

const NavLink = styled.a.attrs({
  className:
    "text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-700 text-sm hover:underline",
})``;

const Footer = () => {
  const { toggleContactOpen } = useHomeContext();
  return (
    <footer className="py-8 md:py-16">
      <div className="container grid grid-cols-4 gap-6 px-4 md:px-8">
        <ul className="grid gap-2 px-4">
          <li>
            <h3 className="font-bold hover:underline dark:text-gray-300">
              <a href="#">
                <FormattedMessage
                  id="footer_title_home"
                  defaultMessage="Home"
                  description="Footer home links title"
                />
              </a>
            </h3>
          </li>
          <li>
            <NavLink href="#experiences">
              <FormattedMessage
                id="footer_experiences"
                defaultMessage="Expériences"
                description="Footer link experiences"
              />
            </NavLink>
          </li>
          <li>
            <NavLink href="#skills">
              <FormattedMessage
                id="footer_skills"
                defaultMessage="Compétences"
                description="Footer link skills"
              />
            </NavLink>
          </li>
          <li>
            <NavLink href="#projects">
              <FormattedMessage
                id="footer_projects"
                defaultMessage="Projets"
                description="Footer link projects"
              />
            </NavLink>
          </li>
          <li>
            <NavLink as="button" onClick={() => toggleContactOpen()}>
              <FormattedMessage
                id="footer_contact"
                defaultMessage="Contact"
                description="Footer link contact"
              />
            </NavLink>
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
