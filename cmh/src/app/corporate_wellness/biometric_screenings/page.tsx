import Article from "@/components/Content/Article";
import PageImage from "@/components/Content/PageImage";
import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Biometric Screenings | Complete Mobile Health",
  description:
    "Comprehensive biometric screenings to assess employee health and well-being.",
  openGraph: {
    title: "Get a Clear Picture of Your Health with Biometric Screenings!",
    description:
      "Our biometric screenings provide key health insights to help you take control of your well-being.",
    images: "https://completemobile-health.com/biometric_screening.jpg",
    url: "https://completemobile-health.com/corporate_wellness/biometric_screenings",
    type: "article",
  },
});

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <PageImage
        title="Biometric Screenings"
        path="/biometric_screening_cover.jpg"
        subtitle=""
        alt="A picture of a biometric screening"
      />
      <section className="flex flex-col justify-center items-center w-full md:w-3/5">
        <div
          className="flex flex-row
        bg-white text-center text-xl md:text-2xl rounded-md mt-6 p-2 
        hover:bg-green-400 hover:ring-1 ring-slate-400 cursor-pointer
          transition delay-75 text-black"
        >
          <Link
            href="/corporate_wellness/wellness_screenings"
            className="flex flex-row justify-center items-center size-fu1ll"
          >
            Also See{" "}
            <span className="italic underline ml-1"> Wellness Screenings</span>
          </Link>
        </div>
        <Article
          title="On Site Biometric Wellness Screenings"
          paragraps={[
            "Complete Mobile Health specializes in providing on-site screenings using biometric tests for businesses with diverse employee populations in one or even multiple locations. Our ability to be on-site – everywhere, coupled with our proprietary data collection system ensures that test results are delivered quickly and accurately. Our extensive knowledge in preventive health and the desire to unlock the keys to motivate employees towards increased wellness have led us to continual advancements in service delivery, testing protocols and incentive-based program delivery.",
            "The wellness programs offered by Complete Mobile Health are customized to your needs and designed to drive employee engagement, we know that one size does not fit all. We take the time to understand your business and help you decide what programs will be the most helpful – building a corporate culture of wellness takes time and proper planning.",
            "Through our experience, we understand that the first step towards developing an effective wellness program is to understand the health status and risks of your employee population.",
            "Through our on site biometric screening, we are able to obtain that information and create a customized program based on the results of the screening.",
          ]}
        />
        <Article
          title="Corporate Wellness Screening Process"
          paragraps={[
            "You will work with a single point of contact throughout the planning, testing and reporting process.",
            "During a screening we measure a variety of metrics of blood and biometrics measurements. Although Complete Mobile Health can offer most labs (nicotine, PSA, etc.) the most standard blood panel screen is lipids and glucose.  The method of collection is offered in both venipuncture and finger stick; both with fasting and non-fasting options.  Biometrics measurements include height, weight, blood pressure and BMI with or without waist circumference.  Your screener will provide a brief review of data collected. In-depth consultations can be provided on-site as an enhanced screening service.",
            "Once the screening process is finished and lab results are available, data is uploaded to a secure processing system and reports are generated.",
          ]}
        />
        <Article
          title="Customizable Wellness Screening Options"
          paragraps={[
            "Complete Mobile Health offers customizable screening, based on the needs of your company. With our online scheduling system you will be able to customize your screening options from your desk. Unlike alternative programs, Complete Mobile Health screening is flexible and tailored to your company’s needs. Blood testing can be performed with the choice of venipuncture or finger stick, fasting or non-fasting. The finger stick option will provide immediate data; a venipuncture draw will be sent to one of our certified labs for analysis. After labs are processed the data is uploaded and ready for report production and distribution.",
          ]}
        />
        <Article
          title="Covering the USA & Canada — Day & Night"
          paragraps={[
            "Complete Mobile Health provides on site testing services for companies ranging from one location to multiple satellite locations anywhere in the United States.  For multiple site screenings, we provide options to include all employees in your screening process. Complete Mobile Health also screens 2nd and 3rd shifts as well as Saturdays at no additional charge.  It is about what is most convenient for you and your employees.",
          ]}
        />
        <Article
          title="Screening for Large Businesses"
          paragraps={[
            "For large populations with employees at a single location, Complete Mobile Health uses a propitiatory data collection system, operated via iPad. Our system offers faster and more accurate data transmissions for larger groups. With this software, we are able to accommodate multiple appointments and schedules for screenings at companies with 400+ employees. The employee is able to view their data before it is transmitted and will digitally sign to verify their personal information is accurate.",
          ]}
        />
      </section>
    </div>
  );
};

export default page;
