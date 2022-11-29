import React from "react";

import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import SvgFavicon from "@components/ui/SvgFavicon";
import { useHomeContext } from "@components/Home";
import { LangSelector } from "../LangSelector";

const NavLink = styled.a.attrs({
  className: "text-gray-800 dark:text-gray-100 hover:text-gray-600",
})`
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    top: auto;
    bottom: -3px;
    width: 0;
    height: 2px;
    background-color: hsl(0 0% 0% / 0.1);
    transition: width 250ms ease;
  }

  &:hover::after {
    content: "";
    width: 100%;
  }

  .dark &::after {
    background-color: hsl(0 0% 100% / 0.4);
  }

  li:not(:last-child) > &::before {
    content: "";
    position: absolute;
    right: calc(-1px / 2 - 1.5rem / 2);
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    width: 1px;
    background-color: hsl(0 0% 0% / 0.3);
  }

  .dark li:not(:last-child) > &::before {
    background-color: hsl(0 0% 100% / 0.4);
  }
`;

const Navbar = () => {
  const { toggleContactOpen } = useHomeContext();
  return (
    <nav className="slideInTop mx-auto mt-5 flex w-max items-center justify-center rounded-md bg-gray-50 bg-opacity-70 px-3 py-2 shadow-sm backdrop-blur-md  dark:bg-gray-800 dark:bg-opacity-70">
      <a
        className="relative h-10 w-10"
        href="#hero"
        aria-label="Raphaël Catarino logo"
      >
        <SvgFavicon />
      </a>
      <ul className="ml-10 flex items-center gap-6">
        <li>
          <NavLink href="#experiences">
            <FormattedMessage
              id="navbar_experiences"
              defaultMessage="Expériences"
              description="Navbar link experiences"
            />
          </NavLink>
        </li>
        <li>
          <NavLink href="#skills">
            <FormattedMessage
              id="navbar_skills"
              defaultMessage="Compétences"
              description="Navbar link skills"
            />
          </NavLink>
        </li>
        <li>
          <NavLink href="#projects">
            <FormattedMessage
              id="navbar_projects"
              defaultMessage="Projets"
              description="Navbar link projects"
            />
          </NavLink>
        </li>
        <li>
          <NavLink as="button" onClick={() => toggleContactOpen()}>
            <FormattedMessage
              id="navbar_contact"
              defaultMessage="Contact"
              description="Navbar link contact"
            />
          </NavLink>
        </li>
        <li>
          <LangSelector />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
