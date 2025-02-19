import React from "react";
import Logo from "../Logo";
import Legal from "./Legal";
import FooterLinksSegment from "./FooterLinksSegment";
import FooterInfo from "./FooterInfo";
import PopupDialog from "../Dialog/PopupDialog";
import ContactForm from "../Forms/ContactForm";
import ApplicationForm from "../Forms/ApplicationForm";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col bg-white h-fit p-4">
      {/* Links Section */}
      <section className="flex flex-row flex-wrap justify-between items-start w-full">
        {/* Logo on the Left */}
        <div className="flex w-full mb-2 justify-center items-center md:w-1/5">
          <Logo height={100} width={250} />
        </div>

        {/* Links in the Middle */}
        <div className="flex flex-1 justify-center items-center">
          <div
            className="
          flex flex-col 
          md:grid md:grid-cols-2 lg:grid-cols-4
          space-y-3 md:space-y-0 lg:space-y-0"
          >
            <FooterLinksSegment
              links={[
                //! contact form dialog
                {
                  component: (
                    <PopupDialog
                      triggerStyle="p-1 italic font-semibold text-center text-wrap bg-slate-200 rounded-md hover:bg-green-400 hover:ring-1 ring-green-600 transition delay-75"
                      triggerText={["Contact Complete Mobile Health"]}
                      dialogTitle="Provide your contact information so we can get in touch"
                      dialogDescription="By pressing submit, an email will be sent to us with your provided information, we will get in touch as soon as possible."
                    >
                      <ContactForm />
                    </PopupDialog>
                  ),
                },
                //! application form dialog
                {
                  component: (
                    <PopupDialog
                      triggerStyle="p-1 italic font-semibold text-center text-wrap bg-slate-200 rounded-md hover:bg-green-400 hover:ring-1 ring-green-600 transition delay-75"
                      triggerText={["Apply for a position"]}
                      dialogTitle="Provide your contact information so we can get in touch and discuss your potential hiring!"
                      dialogDescription="By pressing submit, an email will be sent to us with your provided information, we will get in touch as soon as possible."
                    >
                      <ApplicationForm />
                    </PopupDialog>
                  ),
                },
              ]}
            />
            <FooterLinksSegment
              links={[
                {
                  name: "Bilingual Advantage",
                  linkPath: "/bilingual_advantage",
                },
                {
                  name: "Certifications",
                  linkPath: "/certifications",
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
                  linkPath: "/corporate_wellness/flu_shots",
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
        <div className="hidden md:flex md:w-1/4 md:items-center md:justify-center">
          <FooterInfo />
        </div>
      </section>

      {/* Legal Section */}
      <section className="flex flex-col justify-center items-center mt-4">
        <div className="md:hidden">
          <FooterInfo />
        </div>
        <Legal text="© Copyright Complete Mobile Health Testing Services 2024, All rights reserved — CLIA Certified PCR Lab Testing, Corporate Wellness Programs, Biometric Screenings, On Site Flu Shot Clinic, and Corporate Wellness Services in Wisconsin and all 50 States" />
      </section>
    </footer>
  );
};

export default Footer;
