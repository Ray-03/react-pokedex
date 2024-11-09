import { Link } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const NavLink = ({
  children,
  urlPath,
}: {
  children: ReactNode;
  urlPath: string;
}) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
      }}
      href={urlPath}
    >
      {children}
    </Link>
  );
};

export default NavLink;
