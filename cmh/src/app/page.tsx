import ContactDialog from "@/components/Dialog/ContactDialog";
import ApplicationForm from "@/components/Forms/ApplicationForm";
import ContactForm from "@/components/Forms/ContactForm";
import HomeInfoSegment from "@/components/Segments/HomeInfoSegment";
import HomePicture from "@/components/Segments/HomePicture";
import React from "react";

//!UVEK SPOLJNI DIV CONTAINER ZOBG PAGE LAYOUT

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col space-y-3 w-screen">
      {/*//?About us*/}
      {/* ............ */}

      {/*//?Home Picture*/}
      <div className="flex w-5/6 h-full bg-gray-400 rounded-md my-1">
        <HomePicture />
      </div>

      {/*//? contact dialog with form*/}
      <ContactDialog triggerName="Apply for a position">
        <ApplicationForm />
      </ContactDialog>
      <ContactDialog triggerName="Contact us">
        <ContactForm />
      </ContactDialog>

      {/*//? cards */}
      <section className="flex">
        <HomeInfoSegment
          infoCards={[
            {
              title: "Flu Shot Clinics",
              content:
                "We have provided affordable onsite flu shot services for hundreds of employers, with over a decade of experience providing logistics, processes and resources to ensure your success",
              linkPath: "/flu_shots",
            },
            {
              title: "Corporate Wellness",
              content:
                "Our Suite of Corporate Wellness Services includes: Health Coaching, Wellness Platform, Flu Shot Clinics, Biometric Screenings, Drug Testing, and more...",
              linkPath: "/corporate_wellness",
            },
            {
              title: "Biometric Screening",
              content:
                "Stabilize your health premiums and learn about your employees wellness with our onsite biometric screenings, testing and reporting.",
              linkPath: "/corporate_wellness/biometric_screenings",
            },
            {
              title: "DNA Paternity Testing",
              content: "Accessible paternity testing",
              linkPath: "/corporate_wellness/dna_paternity_testing",
            },
          ]}
        />
      </section>
      {/* //? carousel */}
    </div>
  );
};

export default Home;
