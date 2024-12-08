import React from "react";
import NavLink from "./NavLink";
import { Separator } from "../ui/separator";

interface NavMenuProps {}

const NavMenu: React.FC<NavMenuProps> = () => {
  return (
    <div className=" hidden md:flex justify-center items-center mx-1 space-x-2">
      <NavLink name="Corporate Wellness Services" />
      <Separator className="bg-slate-600 h-6" orientation="vertical" />
      <NavLink name="Partnering" />
      <Separator className="bg-slate-600 h-6" orientation="vertical" />
      <NavLink name="Flu Shots" />
    </div>
  );
};

export default NavMenu;
