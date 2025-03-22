import Article from "@/components/Content/Article";
import React from "react";
import { Metadata } from "next";
import PageImage from "@/components/Content/PageImage";

export const generateMetadata = (): Metadata => ({
  title: "Health Screenings | Complete Mobile Health",
  description:
    "Early detection and preventive screenings to ensure long-term health and wellness.",
  openGraph: {
    title: "Early Detection Saves Lives – Book Your Health Screening!",
    description:
      "Comprehensive health screenings to help detect risks early and maintain a healthier lifestyle.",
    //images: "https://completemobile-health.com/health-screenings.jpg",
    url: "https://completemobile-health.com/corporate_wellness/wellness_screenings",
    type: "article",
  },
});

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <PageImage
        path="/wellness_screening_cover.jpg"
        title="Wellness Screenings"
        subtitle=""
      />
      <section className="flex flex-col justify-center items-center w-full md:w-1/2">
        <Article
          title="On-Site Wellness Screenings"
          paragraps={[
            "Complete Mobile Health has been supporting employee health through on-site screening since 2003. Through our experience, we understand that the first step towards developing an effective wellness program is to understand the health status and risks of your employee population. Through our on-site screening, we are able to obtain that information and create a customized program based on the results of the screening.",
          ]}
        />
        <Article
          title="The Biometric Screening Process"
          paragraps={[
            "You will work with a single point of contact throughout the planning, testing and reporting process.",
            "Although Complete Mobile Health can offer most labs (nicotine, PSA, etc.) the most standard blood panel screen is lipids and glucose. The method of collection is offered in both venipuncture and finger stick; both with fasting and non-fasting options. Biometric measurements include height, weight, blood pressure and BMI with or without waist circumference.  Your screener will provide a brief review of data collected.  In-depth consultations can be provided on-site as an enhanced screening service. ",
            "Once the screening process is finished and lab results are available, data is uploaded to a secure processing system and reports are generated.",
          ]}
        />
        <Article
          title="Customizable Health Screening Options"
          paragraps={[
            "Complete Mobile Health offers customizable screening, based on the needs of your company. With our online scheduling system you will be able to customize your screening options from your desk. Unlike alternative programs, Complete Mobile Health screening is flexible and tailored to your company’s needs. Blood testing can be performed with the choice of venipuncture or finger stick, fasting or non-fasting. The finger stick option will provide immediate data; a venipuncture draw will be sent to one of our certified labs for analysis. After labs are processed the data is uploaded and ready for report production and distribution.",
          ]}
        />
        <Article
          title="Coverage Throughout The Usa — Screenings Day And Night"
          paragraps={[
            "Complete Mobile Health provides on-site testing services for companies ranging from one location to multiple satellite locations anywhere in the United States.  For multiple site screenings, we provide options to include all employees in your screening process.  Complete Mobile Health also screens 2nd and 3rd shifts as well as Saturdays at no additional charge.  It is about what is most convenient for you and your employees.",
          ]}
        />
        <Article
          title="Screening For Large Businesses"
          paragraps={[
            "For large population employees at a single location, Complete Mobile Health uses a software data collection system operated via tablet to offer faster and more accurate data transmissions. With this software, we are able to accommodate multiple appointments and schedules for screenings at companies with 400+ employees. The employee is able to view their data before it is transmitted and will digitally sign to verify their personal information is accurate.",
            "We are here to make your life healthier and easier, Contact Us to learn more about how we can help.",
          ]}
        />
        <Article
          title="What is your state of wellness?"
          paragraps={[
            "The first step to living a healthier life begins with knowing your current state of wellness.",
            "We offer a personal wellness profile as our Health Risk Assessment tool using the data results from the on-site screening (smoking habits, BMI, systolic and diastolic BP, total cholesterol, HDL, LDL, triglycerides and glucose).",
            "The HRA provides multiple reports. There is a Participant Report that can be used by the employee on an individual and private basis as well as multiple aggregate reports for program directors to use as an assessment tool for their company population health as a whole.",
          ]}
        />
      </section>
    </div>
  );
};

export default page;
