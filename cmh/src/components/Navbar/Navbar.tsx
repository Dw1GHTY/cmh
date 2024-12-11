import React from "react";
import Logo from "../Logo";
import NavMenu from "./NavMenu";
import Contact from "../Contact";
import NavMenuMobile from "./NavMenuMobile";
import { TLink } from "@/types/Link";

interface NavbarProps {
  styles: string;
}

const links: Array<TLink> = [
  {
    name: "Corporate Health Services",
    sublinks: [
      "Health Coaching Program",
      "Biometric Screenings",
      "Drug Testing Services",
      "DNA Paternity Testing",
    ],
  },
  { name: "Flu Shots" },
  { name: "Partnering" },
];

const Navbar: React.FC<NavbarProps> = ({ styles }) => {
  return (
    <nav className={styles + " backdrop-filter backdrop-blur-lg bg-opacity-35"}>
      <div className="flex justify-between w-full md:flex md:flex-row md:justify-center md:items-center md:w-5/6">
        <Logo />
        <NavMenu links={links} />
        <NavMenuMobile />
        <Contact
          style="hidden md:flex md:ml-4 md:justify-center md:items-center"
          email="Nickibenson@completemobile-health.com"
        />
      </div>
    </nav>
  );
};

export default Navbar;
