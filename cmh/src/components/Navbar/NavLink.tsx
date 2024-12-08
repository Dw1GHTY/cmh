import React from "react";
import { Button } from "../ui/button";

interface NavLinkProps {
  name: string;
}

const NavLink: React.FC<NavLinkProps> = ({ name }) => {
  return (
    <Button
      className="size-fit rounded-md p-2 hover:bg-green-300"
      variant="ghost"
    >
      {name}
    </Button>
  );
};

export default NavLink;
