import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import NavDropdownMenu from "./NavDropdownMenu";

const NavMenu: React.FC = () => {
  return (
    <div className="hidden md:flex justify-center items-center space-x-2">
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
        className="flex justify-center items-center px-1 rounded-md hover:bg-green-400 h-10"
      >
        Flu Shots
      </Link>

      <Separator orientation="vertical" className="bg-slate-600 h-8" />
    </div>
  );
};

export default NavMenu;
