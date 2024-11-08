import React from "react";
import NavLink from "./NavLink";

const NavURLBar = () => {
  const navRoute: Record<string, string> = {};

  return Object.entries(navRoute).map((el) => {
    const [urlRoute, displayRoute] = el;
    return (
      <NavLink key={urlRoute} urlPath={urlRoute}>
        {displayRoute}
      </NavLink>
    );
  });
};

export default NavURLBar;
