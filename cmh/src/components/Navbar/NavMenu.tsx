import React from "react";
import NavLink from "./NavLink";
import { Separator } from "../ui/separator";
import NavDropdown from "./NavDropdown";

interface NavMenuProps {
  links?: Array<Link>;
}

const NavMenu: React.FC<NavMenuProps> = ({ links }) => {
  return (
    <div className=" hidden md:flex justify-center items-center mx-1 space-x-2">
      {links?.map((link) => {
        if (link.sublinks === undefined)
          return (
            <>
              <NavLink name={link.name} />
              <Separator className="bg-slate-600 h-6" orientation="vertical" />
            </>
          );
        else
          return (
            <>
              <NavDropdown
                dropDownName={link.name}
                dropDownLinks={link.sublinks}
              />
              <Separator className="bg-slate-600 h-6" orientation="vertical" />
            </>
          );
      })}
    </div>
  );
};

export default NavMenu;
