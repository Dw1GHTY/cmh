import React from "react";
import Logo from "../Logo";
import Legal from "./Legal";
import FooterLinksSegment from "./FooterLinksSegment";
import FooterInfo from "./FooterInfo";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col bg-green-200 h-fit p-4">
      {/* Links Section */}
      <section className="flex flex-row flex-wrap justify-between items-start w-full">
        {/* Logo on the Left */}
        <div className="flex w-1/4">
          <Logo />
        </div>

        {/* Links in the Middle */}
        <div className="flex flex-1 justify-center">
          <div className="flex flex-row space-x-8">
            <FooterLinksSegment
              links={[
                {
                  name: "Bilingual Advantage",
                  linkPath: "/bilingual_wellness_services",
                },
                {
                  name: "Certifications",
                  linkPath: "/certifications",
                },
                {
                  name: "Contact Complete Mobile Health",
                  linkPath: "contact", // Open dialog
                },
              ]}
            />
            <FooterLinksSegment
              links={[
                {
                  name: "Drug Testing Services",
                  linkPath: "/corporate_wellness/drug_testing_services",
                },
                {
                  name: "Biometric Screening Labs",
                  linkPath: "/corporate_wellness/biometric_screenings",
                },
                {
                  name: "DNA Paternity Testing",
                  linkPath: "/corporate_wellness/dna_paternity_testing",
                },
              ]}
            />
            <FooterLinksSegment
              links={[
                {
                  name: "Corporate Wellness Services",
                  linkPath: "/corporate_wellness",
                },
                {
                  name: "Flu Shot Clinics",
                  linkPath: "/flu_shots",
                },
                {
                  name: "Wellness Screenings",
                  linkPath: "/corporate_wellness/screenings",
                },
              ]}
            />
          </div>
        </div>

        {/* FooterInfo on the Right */}
        <div className="flex w-1/4 justify-end">
          <FooterInfo />
        </div>
      </section>

      {/* Legal Section */}
      <section className="flex justify-center mt-4">
        <Legal text="© Copyright Midland Health Testing Services 2024, All rights reserved — CLIA Certified PCR Lab Testing, Corporate Wellness Programs, Biometric Screenings, On Site Flu Shot Clinic, and Corporate Wellness Services in Wisconsin and all 50 States" />
      </section>
    </footer>
  );
};

export default Footer;
