import { useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import styled, { keyframes } from "styled-components";

type LangSelectorProps = {
  alignRight?: boolean;
};

const lsAnimate = keyframes`
  0% {
    max-width: 0;
  }
  100% {
    max-width: 200px;
  }
`;

const LangSelectorDropDown = styled.div`
  overflow: hidden;
  animation: ${lsAnimate} 250ms linear forwards;
`;

export const LangSelector = ({ alignRight }: LangSelectorProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const locale = router.locale ?? "fr";

  const country = (l: string): string => {
    switch (l) {
      case "en":
        return "us";
      default:
        return l;
    }
  };

  return (
    <div className="relative">
      <button
        className="inline-flex items-center rounded-md py-1 px-2 text-center text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:bg-opacity-80 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
      >
        <ReactCountryFlag
          countryCode={country(locale ?? "fr")}
          style={{
            fontSize: "1.5em",
            lineHeight: "1.5em",
          }}
        />
      </button>

      <LangSelectorDropDown
        className={`absolute top-0 z-10 divide-gray-100 rounded-md bg-gray-50 bg-opacity-80 shadow dark:divide-gray-600 dark:bg-gray-800 ${
          open ? "block" : "hidden"
        } ${alignRight ? "right-0" : "left-0"}`}
      >
        <ul className="flex text-sm text-gray-700 dark:text-gray-200">
          {!alignRight && (
            <li className="block py-1 px-2 hover:bg-gray-100 hover:bg-opacity-70 dark:hover:bg-gray-600 dark:hover:bg-opacity-70 dark:hover:text-white">
              <Link href="/" locale={locale} scroll={false}>
                <ReactCountryFlag
                  countryCode={country(locale ?? "fr")}
                  style={{
                    fontSize: "1.5em",
                    lineHeight: "1.5em",
                  }}
                />
              </Link>
            </li>
          )}
          {router.locales
            ?.filter((l) => l !== locale)
            .map((l) => (
              <li
                key={l}
                className="block py-1 px-2 hover:bg-gray-100 hover:bg-opacity-70 dark:hover:bg-gray-600 dark:hover:bg-opacity-70 dark:hover:text-white"
              >
                <Link href="/" locale={l} scroll={false}>
                  <ReactCountryFlag
                    countryCode={country(l)}
                    style={{
                      fontSize: "1.5em",
                      lineHeight: "1.5em",
                    }}
                  />
                </Link>
              </li>
            ))}
          {alignRight && (
            <li className="block py-1 px-2 hover:bg-gray-100 hover:bg-opacity-70 dark:hover:bg-gray-600 dark:hover:bg-opacity-70 dark:hover:text-white">
              <Link href="/" locale={locale} scroll={false}>
                <ReactCountryFlag
                  countryCode={country(locale ?? "fr")}
                  style={{
                    fontSize: "1.5em",
                    lineHeight: "1.5em",
                  }}
                />
              </Link>
            </li>
          )}
        </ul>
      </LangSelectorDropDown>
    </div>
  );
};
