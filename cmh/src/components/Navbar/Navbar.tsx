import React from "react";
import Logo from "../Logo";
import NavMenu from "./NavMenu";
import Contact from "../Contact";
import NavMenuMobile from "./NavMenuMobile";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-10 flex justify-center items-center h-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-35">
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
            {
              linkName: "DNA Paternity Testing",
              linkPath: "/corporate_wellness/dna_paternity_testing",
            },
          ]}
        />
        <Contact
          style="hidden md:flex md:justify-center md:items-center hover:text-white hover:cursor-pointer"
          email="nickib@completemobile-health.com"
          phone="414-213-6543"
        />
      </div>
    </nav>
  );
};

export default Navbar;
