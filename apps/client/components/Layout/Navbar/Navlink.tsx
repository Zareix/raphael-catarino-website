"use client";
import LocalizedLink from "@helpers/LocalizedLink";
import styled from "styled-components";

export const NavLink = styled(LocalizedLink).attrs({
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

export const NavLinkFooter = styled.a.attrs({
  className:
    "text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-700 text-sm hover:underline",
})``;
