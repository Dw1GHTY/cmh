import React from "react";
import Logo from "../Logo";
import NavMenu from "./NavMenu";
import Contact from "../Contact";
import NavMenuMobile from "./NavMenuMobile";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full top-0 z-10 flex justify-center items-center h-20 bg-white backdrop-filter backdrop-blur-lg bg-opacity-35">
      <div className="flex justify-between w-full md:flex md:flex-row md:justify-center md:items-center">
        <Logo />
        <NavMenu />
        <NavMenuMobile
          hamburgerLinks={[
            {
              name: "Our Services",
              path: "/corporate_wellness",
            },
            {
              name: "Flu Shots",
              path: "/corporate_wellness/flu_shots",
            },
            {
              name: "Screenings",
              path: "/corporate_wellness/screenings",
            },
          ]}
          hamburgerDropdowns={[
            {
              name: "Corporate Wellness Services",
              links: [
                {
                  name: "Health Coaching Program",
                  path: "/corporate_wellness/health_coaching_program",
                },
                {
                  name: "Biometric Screenings",
                  path: "/corporate_wellness/biometric_screenings",
                },
                {
                  name: "Drug Testing Services",
                  path: "/corporate_wellness/",
                },
                {
                  name: "DNA Paternity Testing",
                  path: "/corporate_wellness/dna_paternity_testing",
                },
              ],
            },
          ]}
        />
        <Contact
          style="hidden p-1 bg-white rounded-md cursor-pointer md:flex md:justify-center md:items-center hover:bg-green-200"
          email="nickib@completemobile-health.com"
          phone="414-213-6543"
        />
      </div>
    </nav>
  );
};

export default Navbar;
