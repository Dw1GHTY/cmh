import React from "react";
import NavLink from "./NavLink";
import { Separator } from "../ui/separator";
import NavDropdown from "./NavDropdown";
import { TLink } from "@/types/Link";

interface NavMenuProps {
  links?: Array<TLink>;
}

const NavMenu: React.FC<NavMenuProps> = ({ links }) => {
  return (
    <div
      key={1}
      className=" hidden md:flex justify-center items-center space-x-2"
    >
      {links?.map((link, index) => {
        if (link.sublinks === undefined)
          return (
            <>
              <NavLink name={link.name} key={index} />
              <Separator
                key={index + 1}
                className="bg-slate-600 h-6"
                orientation="vertical"
              />
            </>
          );
        else
          return (
            <>
              <NavDropdown
                key={index}
                dropDownName={link.name}
                dropDownLinks={link.sublinks}
              />
              <Separator
                key={index + 1}
                className="bg-slate-600 h-6"
                orientation="vertical"
              />
            </>
          );
      })}
    </div>
  );
};

export default NavMenu;
