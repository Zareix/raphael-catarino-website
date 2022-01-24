import React, { useContext } from "react"

import { Link as GatsbyLink } from "gatsby"

import CmsDataContext from "../../../utils/context/data-context"

const NavLinks = ({ pathname, className, closeNavDrawer }) => {
  const {
    layout: { navbar },
  } = useContext(CmsDataContext)

  return (
    <ul className={className}>
      {navbar.links.map((link, i) => (
        <li key={i} className="h-full flex items-center text-center">
          {link.target.includes("/") ? (
            <GatsbyLink
              className="cursor-pointer nav-link px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="link-active"
              to={pathname + link.target}
            >
              {link.label}
            </GatsbyLink>
          ) : (
            <a
              className="cursor-pointer nav-link px-3 py-2 rounded-md text-sm font-medium"
              href={"#" + link.target}
              onClick={closeNavDrawer}
            >
              {link.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
