import React from "react";
import Logo from "../Logo";
import NavMenu from "./NavMenu";
import NavMenuMobile from "./NavMenuMobile";
import PopupDialog from "../Dialog/PopupDialog";
import ContactForm from "../Forms/ContactForm";

const Navbar: React.FC = () => {
  return (
    <nav
      className="fixed px-2 w-full top-0 z-10 
                    flex justify-center items-center md:justify-center 
                    h-16 bg-white backdrop-filter backdrop-blur-lg bg-opacity-35
                    border-b border-slate-300"
    >
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
              name: "Wellness Screenings",
              path: "/corporate_wellness/wellness_screenings",
            },
            {
              name: "Certifications",
              path: "/certifications",
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
                  path: "/corporate_wellness/drug_testing_services",
                },
                {
                  name: "DNA Paternity Testing",
                  path: "/corporate_wellness/dna_paternity_testing",
                },
              ],
            },
          ]}
        />
        <PopupDialog
          triggerStyle="hidden p-1 bg-white rounded-md shadow-md cursor-pointer text-nowrap md:flex md:justify-center md:items-center
          hover:bg-green-400 hover:ring-1 ring-green-800 transition delay-75"
          triggerText={["nickib@completemobile-health.com", "414-213-6543"]}
          dialogTitle="Provide your contact information so we can get in touch"
          dialogDescription="By pressing submit, an email will be sent to us with your provided information, we will get in touch as soon as possible."
        >
          <ContactForm />
        </PopupDialog>
      </div>
    </nav>
  );
};

export default Navbar;
