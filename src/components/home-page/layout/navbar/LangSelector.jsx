import React, { useState, useEffect, useContext } from "react";

import ReactCountryFlag from "react-country-flag";
import { navigate } from "gatsby-link";
import styled, { keyframes } from "styled-components";
import CmsDataContext from "../../../utils/context/data-context";

const lang = [
  {
    countryCode: "FR",
    title: "Français",
    redirect: "/fr/",
    locale: "fr",
  },
  {
    countryCode: "US",
    title: "English",
    redirect: "/en/",
    locale: "en",
  },
];

const appear = keyframes`
  0% {
    max-height: 0;
    width : 0;
  }
  100%{
    max-height: 8rem;
    width: 10rem;
  }
`;

const LangSelectorDrawer = styled.div`
  position: absolute;
  overflow: hidden;
  width: 14rem;
  right: 0px;
  margin-top: 0.5rem;
  transform-origin: top right;
  border-radius: 0.375rem;
  animation: ${appear} 500ms ease forwards;
`;

const LangSelector = ({ navVisible, extSlug }) => {
  const { pageLocation } = useContext(CmsDataContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(
    pageLocation.pathname.includes("en") ? "US" : "FR"
  );
  const linkExtension = extSlug ? extSlug : "";

  let timeOutId;

  useEffect(() => {
    if (!navVisible) setIsOpen(false);
  }, [navVisible]);

  const onBlurHandler = () => {
    timeOutId = setTimeout(() => {
      setIsOpen(false);
    });
  };

  const onFocusHandler = () => {
    clearTimeout(timeOutId);
  };

  return (
    <div
      className="relative mr-1 inline-block text-left md:mr-0"
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      role="menu"
    >
      <button
        type="button"
        className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2  focus:ring-offset-gray-200 dark:border-gray-400 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-400"
        id="langSelector"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <ReactCountryFlag countryCode={selectedLang} svg className="text-lg" />
      </button>
      {isOpen && navVisible && (
        <LangSelectorDrawer
          id="langSelectorDrawer"
          className="bg-white shadow-xl dark:bg-gray-700"
        >
          <div className="py-1">
            {lang.map((l, i) => (
              <button
                key={i}
                className={
                  "text-md flex w-full items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" +
                  (selectedLang === l.countryCode ? " font-semibold" : "")
                }
                onClick={() => {
                  setSelectedLang(l.countryCode);
                  navigate(l.redirect + linkExtension);
                }}
              >
                <ReactCountryFlag
                  svg
                  countryCode={l.countryCode}
                  className="text-lg"
                />
                <span className="ml-2">{l.title}</span>
              </button>
            ))}
          </div>
        </LangSelectorDrawer>
      )}
    </div>
  );
};

export default LangSelector;
