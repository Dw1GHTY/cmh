import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface NavLinkProps {
  name: string;
}

const NavLink: React.FC<NavLinkProps> = ({ name }) => {
  return (
    <Button
      className="size-fit rounded-md p-2 hover:bg-green-600"
      variant="ghost"
    >
      {name}
      {/* <Link className="size-fill" href={"" + name.toLowerCase()}>
        {name}
      </Link> */}
    </Button>
  );
};

export default NavLink;
