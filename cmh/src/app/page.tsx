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
      <div className="flex w-5/6 h-full rounded-md my-1">
        <HomePicture />
      </div>

      <div className="flex flex-col flex-wrap-reverse justify-center items-center my-4">
        <h2 className="flex text-white text-xl">Contact us</h2>
        <div className="flex flex-row space-x-2">
          <ContactDialog
            triggerPhone=""
            triggerEmail="Have a question?"
            triggerStyle="bg-slate-100 text-black rounded-md md:size-fit p-2 hover:bg-green-200"
          >
            <ContactForm />
          </ContactDialog>
          <ContactDialog
            triggerPhone=""
            triggerEmail="Want to partner with us?"
            triggerStyle="bg-slate-100 text-black rounded-md md:size-fit p-2 hover:bg-green-200"
          >
            <ApplicationForm />
          </ContactDialog>
        </div>
      </div>

      {/*//? cards */}
      <section className="flex">
        <HomeInfoSegment
          infoCards={[
            {
              title: "Flu Shot Clinics",
              content:
                "We have provided affordable onsite flu shot services for hundreds of employers, with over a decade of experience providing logistics, processes and resources to ensure your success",
              linkPath: "/corporate_wellness/flu_shots",
              imageSrc: "/flu_shot.jpg",
              imageAlt: "Image of a flu shot",
            },
            {
              title: "Corporate Wellness",
              content:
                "Our Suite of Corporate Wellness Services includes: Health Coaching, Wellness Platform, Flu Shot Clinics, Biometric Screenings, Drug Testing, and more...",
              linkPath: "/corporate_wellness",
              imageSrc: "/corporate_wellness.jpg",
              imageAlt: "Healthy, content person",
            },
            {
              title: "Biometric Screening",
              content:
                "Stabilize your health premiums and learn about your employees wellness with our onsite biometric screenings, testing and reporting.",
              linkPath: "/corporate_wellness/biometric_screenings",
              imageSrc: "/biometric_screening.jpg",
              imageAlt: "A doctor performing a blood pressure test",
            },
            {
              title: "DNA Paternity Testing",
              content: "Accessible paternity testing",
              linkPath: "/corporate_wellness/dna_paternity_testing",
              imageSrc: "/dna_test.png",
              imageAlt: "A DNA test",
            },
          ]}
        />
      </section>
      {/* //? carousel */}
    </div>
  );
};

export default Home;
