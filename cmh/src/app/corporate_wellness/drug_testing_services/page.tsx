import Article from "@/components/Content/Article";
import PageImage from "@/components/Content/PageImage";
import React from "react";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Drug Testing Services | Complete Mobile Health",
  description:
    "Reliable workplace drug testing services for a safe and compliant work environment.",
  openGraph: {
    title: "Ensure Workplace Safety with Our Drug Testing Services!",
    description:
      "Comprehensive and legally compliant drug testing solutions for employers and organizations.",
    images: "https://completemobile-health.com/drug_test_cover.jpg",
    url: "https://completemobile-health.com/corporate_wellness/drug_testing_services",
    type: "article",
  },
});

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <PageImage
        path="/drug_test_cover.jpg"
        title="Drug Testing Service"
        subtitle=""
        alt="A picture of a drug test"
      />
      <div className="flex flex-col items-center w-5/6 md:w-1/2 h-fit my-4">
        <Article
          title="Drug Testing Services for Employers Nationwide"
          paragraps={[
            "As an employer, you don’t always know if there’s a problem with substance abuse by looking at an employee or reviewing an application. That’s why drug screening is so important in the workplace.",
            "Complete Mobile Health offers complete non-DOT and DOT-regulated alcohol and drug testing collection services for pre-employment, random, return to duty, follow-up, reasonable cause, reasonable suspicion and post-accident drug testing.",
            "Whether you require hair, oral fluid, urine or blood collections, our fast and professional collectors follow very stringent collection protocols, producing the highest quality laboratory drug testing results and eliminating the many canceled, rejected or troubled specimens due to poorly trained or inexperienced collectors.",
          ]}
        />
      </div>
    </div>
  );
};

export default page;
