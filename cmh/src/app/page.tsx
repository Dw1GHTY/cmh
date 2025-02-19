import ApplicationForm from "@/components/Forms/ApplicationForm";
import ContactForm from "@/components/Forms/ContactForm";
import HomeInfoSegment from "@/components/Segments/HomeInfoSegment";
import PageTitlePicture from "@/components/Content/PageTitlePicture";
import React from "react";
import { Separator } from "@/components/ui/separator";
import PopupDialog from "@/components/Dialog/PopupDialog";

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col space-y-3 w-screen">
      {/*//?About us*/}
      {/* ............ */}

      {/*//?Home Picture*/}
      <section className="flex w-full h-full items-center justify-center rounded-md my-1">
        <PageTitlePicture
          imagePath="/stock1.png"
          imageAlt="An image of a blood test"
          title="Complete Mobile Health Is Your Corporate Wellness Company"
          description="Custom corporate wellness programs for your employees. On-site biometric screenings, blood testing, and reporting."
        />
      </section>
      <Separator className="w-2/3 md:w-1/2 bg-white h-1 rounded-md mb-2" />

      {/* //? Contact us */}
      <section className="flex flex-col flex-wrap-reverse justify-center items-center my-4">
        <h2
          className="flex mb-2 
        italic font-semibold text-white text-center text-2xl md:text-6xl p-1"
        >
          Contact us
        </h2>
        <div className="flex flex-row space-x-2 mb-2">
          <PopupDialog
            triggerStyle="text-center bg-white rounded-md p-2 transition delay-75 bg-slate-100 text-black rounded-md md:size-fit hover:bg-green-200 hover:ring-1 ring-green-700"
            triggerText={["Have a question?"]}
            dialogTitle="Provide your contact information so we can get in touch"
            dialogDescription="By pressing submit, an email will be sent to us with your provided information, we will get in touch as soon as possible."
          >
            <ContactForm />
          </PopupDialog>
          <PopupDialog
            triggerStyle="text-center bg-white rounded-md p-2 transition delay-75 bg-slate-100 text-black rounded-md md:size-fit hover:bg-green-200 hover:ring-1 ring-green-700"
            triggerText={["Want to partner with us?"]}
            dialogTitle="Provide your contact information so we can get in touch and discuss your potential hiring!"
            dialogDescription="By pressing submit, an email will be sent to us with your provided information, we will get in touch as soon as possible."
          >
            <ApplicationForm />
          </PopupDialog>
        </div>
      </section>
      <Separator className="w-2/3 md:w-1/2 bg-white h-1 rounded-md " />

      {/*//? cards */}
      <section className="flex w-full justify-center items-center">
        <HomeInfoSegment
          infoCards={[
            {
              title: "Flu Shot Clinics",
              content:
                "We have provided affordable onsite flu shot services for hundreds of employers, with over a decade of experience providing logistics, processes and resources to ensure your success",
              linkPath: "/corporate_wellness/flu_shots",
              imageSrc: "/flu_shot.jpg",
              imageAlt: "Image of a flu shot",
              buttonText: "Find out more about flu shots",
            },
            {
              title: "Corporate Wellness",
              content:
                "Our Suite of Corporate Wellness Services includes: Health Coaching, Wellness Platform, Flu Shot Clinics, Biometric Screenings, Drug Testing, and more...",
              linkPath: "/corporate_wellness",
              imageSrc: "/corporate_wellness.jpg",
              imageAlt: "Healthy, content person",
              buttonText: "All corporate services we provide",
            },
            {
              title: "Biometric Screening",
              content:
                "Stabilize your health premiums and learn about your employees wellness with our onsite biometric screenings, testing and reporting.",
              linkPath: "/corporate_wellness/biometric_screenings",
              imageSrc: "/biometric_screening.jpg",
              imageAlt: "A doctor performing a blood pressure test",
              buttonText: "Learn about biometric screenings",
            },
            {
              title: "DNA Paternity Testing",
              content: "Accessible paternity testing",
              linkPath: "/corporate_wellness/dna_paternity_testing",
              imageSrc: "/dna_test.png",
              imageAlt: "A DNA test",
              buttonText: "Learn more about dna paternity testing",
            },
          ]}
        />
      </section>
      {/* //? carousel */}
    </div>
  );
};

export default Home;
