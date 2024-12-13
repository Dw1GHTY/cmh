"use client";

import React from "react";
import Logo from "../Logo";
import NavMenu from "./NavMenu";
import Contact from "../Contact";
import NavMenuMobile from "./NavMenuMobile";

interface NavbarProps {
  styles: string;
}

const Navbar: React.FC<NavbarProps> = ({ styles }) => {
  return (
    <nav className={styles + " backdrop-filter backdrop-blur-lg bg-opacity-35"}>
      <div className="flex justify-between w-full md:flex md:flex-row md:justify-center md:items-center md:w-5/6">
        <Logo />
        <NavMenu />
        <NavMenuMobile
          dropDownLinks={[
            {
              linkName: "Health Coaching Program",
              linkPath: "/corporate_wellness/health_coaching_program",
            },
            {
              linkName: "Biometric Screenings",
              linkPath: "/corporate_wellness/biometric_screenings",
            },
            {
              linkName: "Drug Testing Services",
              linkPath: "/corporate_wellness/",
            },
          ]}
        />
        <Contact
          style="hidden md:flex md:ml-4 md:justify-center md:items-center"
          email="Nickibenson@completemobile-health.com"
        />
      </div>
    </nav>
  );
};

export default Navbar;
