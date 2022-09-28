import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import SvgFavicon from '@components/ui/SvgFavicon';

const DrawerButton = styled.button<{ isDrawerOpened: boolean }>`
  width: 32px;
  height: 32px;
  position: relative;

  ::after,
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ isDrawerOpened }) =>
      isDrawerOpened ? 'hsl(0 0% 0% / 0.8);' : 'hsl(0 0% 0% / 0.6)'};
    left: 0;
    right: 0;
    border-radius: 100vw;
    transition: all 250ms;
  }

  ::after {
    top: 11px;
    ${({ isDrawerOpened }) =>
      isDrawerOpened ? 'top: auto; transform: rotate(45deg);' : ''}
  }

  ::before {
    bottom: 11px;
    ${({ isDrawerOpened }) =>
      isDrawerOpened ? 'bottom: auto; transform: rotate(-45deg);' : ''}
  }
`;

const NavbarMobile = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  return (
    <>
      <nav className="flex mx-auto items-center border-b justify-between bg-gray-50 py-2 px-5 w-full bg-opacity-70 backdrop-blur-md overflow-hidden">
        <a
          className="h-10 w-10 relative"
          href="#hero"
          onClick={() => setIsDrawerOpened(false)}
        >
          <SvgFavicon />
        </a>
        <DrawerButton
          isDrawerOpened={isDrawerOpened}
          onClick={() => setIsDrawerOpened(!isDrawerOpened)}
        />
      </nav>
      <div
        className={`fixed -z-10 border-b bg-gray-50 bg-opacity-70 backdrop-blur-md w-full transition-all grid gap-4 ${
          isDrawerOpened ? 'translate-y-0' : 'translate-y-[-170%]'
        }`}
      >
        <ul className="px-6 py-4 text-right space-y-1 text-gray-700 text-lg">
          <li onClick={() => setIsDrawerOpened(false)}>
            <a href="#experiences">Expériences</a>
          </li>
          <li onClick={() => setIsDrawerOpened(false)}>
            <a href="#skills">Compétences</a>
          </li>
          <li onClick={() => setIsDrawerOpened(false)}>
            <a href="#projects">Projets</a>
          </li>
          <li onClick={() => setIsDrawerOpened(false)}>
            <button>Contact</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarMobile;
