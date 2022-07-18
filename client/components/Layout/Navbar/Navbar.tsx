import React from 'react';

import styled from 'styled-components';

import SvgFavicon from '@components/ui/SvgFavicon';

const NavLink = styled.a.attrs({
  className: 'text-gray-800 hover:text-gray-600',
})`
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
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
    content: '';
    width: 100%;
  }

  li:not(:last-child) > &::before {
    content: '';
    position: absolute;
    right: calc(-1px / 2 - 1.5rem / 2);
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    width: 1px;
    background-color: hsl(0 0% 0% / 0.3);
  }
`;

const Navbar = () => {
  return (
    <nav className="flex w-max mx-auto items-center justify-center mt-5 bg-gray-50 px-3 py-2 bg-opacity-70 backdrop-blur-md rounded-md overflow-hidden">
      <a className="h-10 w-10 relative" href="#hero">
        <SvgFavicon />
      </a>
      <ul className="flex gap-6 ml-10">
        <li>
          <NavLink href="#experiences">Expériences</NavLink>
        </li>
        <li>
          <NavLink href="#skills">Compétences</NavLink>
        </li>
        <li>
          <NavLink href="#projects">Projets</NavLink>
        </li>
        <li>
          <NavLink>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
