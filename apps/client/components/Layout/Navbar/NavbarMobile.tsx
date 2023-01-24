import React, { useEffect, useState } from "react";

import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";

import SvgFavicon from "@components/ui/SvgFavicon";
import { useHomeContext } from "@components/Home";
import { LangSelector } from "../LangSelector";
import { defineMessage, FormattedMessage, useIntl } from "react-intl";
import { NavigationLink } from "@models/Layout";
import Link from "next/link";
import { ParsedUrlQueryInput } from "querystring";

const DrawerButton = styled.button<{ isDrawerOpened: boolean }>`
  width: 32px;
  height: 32px;
  position: relative;

  ::after,
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: hsl(0 0% 0% / 0.8);
    left: 0;
    right: 0;
    border-radius: 100vw;
    transition: all 250ms;
  }

  ::after {
    top: 11px;
    ${({ isDrawerOpened }) =>
      isDrawerOpened ? "top: auto; transform: rotate(45deg);" : ""}
  }

  ::before {
    bottom: 11px;
    ${({ isDrawerOpened }) =>
      isDrawerOpened ? "bottom: auto; transform: rotate(-45deg);" : ""}
  }

  .dark &::after,
  .dark &::before {
    background-color: hsl(0 0% 100% / 0.5);
  }
`;

const backdrop = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const Backdrop = styled.div`
  animation: ${backdrop} 200ms;
`;

type Props = {
  toggleContactOpen: Function;
  links: NavigationLink[];
  linkQuery?: string | ParsedUrlQueryInput;
};

const NavbarMobile = ({ links, toggleContactOpen, linkQuery }: Props) => {
  const intl = useIntl();
  const drawerBtnLabel = defineMessage({
    id: "navbar_btn_drawer",
    defaultMessage: "Ouvrir le menu de navigation",
    description: "Navbar open drawer",
  });
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsDrawerOpened(false);
  }, [router.locale]);

  return (
    <>
      <nav
        className={`mx-auto flex w-full items-center justify-between overflow-hidden border-b bg-slate-50 py-2 px-5 transition-all dark:border-gray-700 dark:bg-slate-800 ${
          isDrawerOpened
            ? ""
            : "bg-opacity-70 backdrop-blur-md  dark:bg-opacity-70"
        }`}
      >
        <a
          className="relative h-10 w-10"
          href="#hero"
          aria-label="Raphaël Catarino logo"
          onClick={() => setIsDrawerOpened(false)}
        >
          <SvgFavicon />
        </a>
        <DrawerButton
          isDrawerOpened={isDrawerOpened}
          aria-label={intl.formatMessage(drawerBtnLabel)}
          onClick={() => setIsDrawerOpened(!isDrawerOpened)}
        />
      </nav>
      {isDrawerOpened && (
        <Backdrop
          onClick={() => setIsDrawerOpened(!isDrawerOpened)}
          className="fixed -z-20 h-screen w-full bg-gray-800 bg-opacity-20 backdrop-blur-sm"
        />
      )}
      <div
        className={`fixed -z-10 grid w-full gap-4 border-b bg-gray-50 transition-all duration-200 dark:border-gray-700 dark:bg-gray-800 ${
          isDrawerOpened ? "translate-y-0" : "translate-y-[-170%]"
        }`}
      >
        <ul className="space-y-1 px-6 py-4 text-right text-lg text-gray-700 dark:text-gray-200">
          {links.map((link) =>
            link.href.startsWith("#") ? (
              <li key={link.id} onClick={() => setIsDrawerOpened(false)}>
                <a href={link.href}>
                  <FormattedMessage
                    id={link.id}
                    defaultMessage={link.defaultMessage}
                    description={link.description}
                  />
                </a>
              </li>
            ) : (
              <li key={link.id} onClick={() => setIsDrawerOpened(false)}>
                <Link href={link.href}>
                  <FormattedMessage
                    id={link.id}
                    defaultMessage={link.defaultMessage}
                    description={link.description}
                  />
                </Link>
              </li>
            )
          )}
          <li
            onClick={() => {
              setIsDrawerOpened(false);
              toggleContactOpen();
            }}
          >
            <button>Contact</button>
          </li>
          <li>
            <LangSelector alignRight linkQuery={linkQuery} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarMobile;
