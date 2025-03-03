import Paragraph from "@/components/Content/Paragraph";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = (): Metadata => ({
  title: "Bilingual Advantage | Complete Mobile Health",
  description: "Wellness services we provide for Spanish speaking employess",
  openGraph: {
    title:
      "English is not your mother tongue? We provide bilingual advantages!",
    description: "Wellness services we provide for Spanish speaking employess!",
  },
});

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full mt-24">
      <h1 className="text-white text-4xl font-semibold text-center">
        Complete Mobile Health Offers Bilingual Services
      </h1>
      <section className="flex flex-col justify-start bg-white w-full md:w-2/3 h-fit my-3 p-4 rounded-md shadow-md">
        <Paragraph
          title=""
          text="Complete Mobile Health offers bilingual medical screening staff and health coaching staff to assist you with your wellness program. We provide on site biometric screening services, blood testing, and easy to understand outcomes-based reports in both English and Spanish. Our HRA is available in Spanish, English, and compatible with Google Language, which offers translation into 104 languages."
        />
        <br />
        <Paragraph
          title=""
          text="Our bilingual support staff is available for continuous education. When our bilingual staff is not available, Complete Mobile recommends using the Language Line, an online translation resource."
        />
        <br />
        <h3 className="text-3xl text-green-900">
          Our wellness services for Spanish speaking employees including:
        </h3>
        <ul className="list-disc pl-4">
          <li>Implementation of on site smoking cessation programs.</li>
          <li>
            Recruiting and elevating “Wellness Champions” from your Spanish
            speaking population.
          </li>
          <li>
            Identifying free, local community resources to expand and engage
            your Spanish speaking employees outside of the work environment.
          </li>
          <li>Flyers and education materials in both English and Spanish.</li>
          <li>
            Translation of communication documents from English to Spanish.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default page;
