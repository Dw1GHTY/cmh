import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import NavDropdownMenu from "./NavDropdownMenu";

const NavMenu: React.FC = () => {
  return (
    <div className=" hidden md:flex justify-center items-center space-x-2">
      {/* //! corporate wellness services */}
      <NavDropdownMenu />
      <Separator orientation="vertical" className="bg-slate-500 h-8" />
      <Link
        href="./flu_shots"
        className="rounded-md hover:bg-green-600 w-fit h-fit"
      >
        Flu Shots
      </Link>

      <Separator orientation="vertical" className="bg-slate-600 h-8" />
    </div>
  );
};

export default NavMenu;
