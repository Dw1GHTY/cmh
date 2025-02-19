import React from "react";
import Link from "next/link";
import NavDropdownMenu from "./NavDropdownMenu";
import { Separator } from "../ui/separator";

const NavMenu: React.FC = () => {
  return (
    <div className="hidden md:flex justify-center mx-3 items-center space-x-2">
      {/* //! corporate wellness services */}
      <NavDropdownMenu
        links={[
          "Health Coaching Program",
          "Biometric Screenings",
          "Drug Testing Services",
          "DNA Paternity Testing",
        ]}
      />
      <Separator orientation="vertical" className="bg-slate-500 h-8" />
      <Link
        href="/corporate_wellness/flu_shots"
        className="flex justify-center items-center h-10 px-1 font-semibold rounded-md 
        hover:bg-green-600 hover:text-white transition delay-75"
      >
        Flu Shots
      </Link>
    </div>
  );
};

export default NavMenu;
