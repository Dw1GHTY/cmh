import ParagraphCard from "@/components/Cards/ParagraphCard";
import PageImage from "@/components/Content/PageImage";
import { Metadata } from "next";
import React from "react";

export const generateMetadata = (): Metadata => ({
  title: "Corporate Wellness Programs | Complete Mobile Health",
  description:
    "Boost employee health and productivity with our customized corporate wellness programs.",
  openGraph: {
    title: "Elevate Your Workforce with Custom Corporate Wellness Plans!",
    description:
      "Enhance workplace wellness with biometric screenings, health coaching, and more. A healthier team is a stronger team!",
    images: "https://completemobile-health.com/corporate_wellness_cover.jpg",
    url: "https://completemobile-health.com/corporate_wellness",
    type: "article",
  },
});

const page = () => {
  return (
    <div className="w-full h-full">
      <PageImage
        path="/corporate_wellness_cover.jpg"
        title="Corporate Wellness Services"
        subtitle="All of our services in one place"
        alt="A doctor with a stethoscope"
      />
      <div className="flex flex-col justify-center items-center w-full h-fit">
        {/* //!ARTICLE */}
        <ParagraphCard
          title="Health Coaching Program"
          content="Coaching is a client-centered, relationship-based process which assists an individual in the shift from being a passive recipient of health care interventions to adopting a responsible, self-directed, proactive stance. The purpose of coaching is to help the individual achieve lasting change."
          linkPath="/corporate_wellness/health_coaching_program"
        />
        <ParagraphCard
          title="Flu Shot Clinics"
          content="With over a decade of experience, Complete Mobile Health provides highly trained RNs, NPs and MDs to administer flu vaccinations. We abide by all government safety standards. Even during the H1N1 crisis, we secured and delivered vaccinations for all of our on-site clinics, as promised."
          linkPath="/corporate_wellness/flu_shots"
        />
        <ParagraphCard
          title="Biometric Screenings"
          content="Complete Mobile Health’s Biometric Screenings can be done at the work site and are used as part of a wellness program to benchmark and evaluate changes in employee health over time. The screenings measure physical characteristics such as height, weight, body mass index, blood pressure, blood cholesterol, blood glucose, and aerobic fitness."
          linkPath="/corporate_wellness/biometric_screenings"
        />
        <ParagraphCard
          title="Drug Testing Services"
          content="Complete Mobile Health offers complete non-DOT and DOT-regulated alcohol and drug testing collection services for pre-employment, random, return to duty, follow-up, reasonable cause, reasonable suspicion and post-accident drug testing."
          linkPath="/corporate_wellness/drug_testing_services"
        />
        <ParagraphCard
          title="DNA Paternity Testing"
          content="Complete Mobile Health offers clients complete and accurate DNA paternity test collections by a meticulously trained staff of health professionals in our more than 230 service locations."
          linkPath="/corporate_wellness/dna_paternity_testing"
        />
      </div>
    </div>
  );
};

export default page;
