import ParagraphCard from "@/components/Cards/ParagraphCard";
import PageImage from "@/components/Content/PageImage";
import React from "react";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Health Coaching Program | Complete Mobile Health",
  description:
    "Personalized health coaching programs to improve employee well-being and lifestyle.",
  openGraph: {
    title: "Transform Your Health with Our Expert Coaching Program!",
    description:
      "Achieve your health goals with personalized coaching and guidance from wellness professionals.",
    images: "https://completemobile-health.com/health-coaching.jpg",
    url: "https://completemobile-health.com/corporate_wellness/health_coaching_program",
    type: "article",
  },
});

const page = () => {
  return (
    <div className="flex flex-col size-full justify-center items-center shadow-md">
      <PageImage
        path="/health-coaching.jpg"
        title="Health Coaching Program"
        subtitle=""
        alt="An image of two happy persons discussing a health coaching program"
      />
      <section className="flex flex-col justify-start bg-white w-full md:w-2/3 h-fit my-3 p-4 rounded-md shadow-md">
        <article>
          Coaching is a client-centered, relationship-based process which
          assists an individual in the shift from being a passive recipient of
          health care interventions to adopting a responsible, self-directed,
          proactive stance. The purpose of coaching is to help the individual
          achieve lasting change.
        </article>
        <br />
        <article>
          <h2 className="text-green-800 font-bold text-2xl">
            Role Of The Health Coach
          </h2>
          <p className="bg-green-200 rounded-lg">
            Build & maintain participant trust & conﬁdentiality
          </p>
          <p className="">Provide guidance & referral to resources</p>
          <p className="bg-green-200 rounded-lg">
            Share health & wellness education & resources
          </p>
          <p className="">
            Help the participant identify values, goals & develop plans of
            action
          </p>
          <p className="bg-green-200 rounded-lg">
            Support & promote behavior change activities using evidenced-based
            coaching knowledge & skill
          </p>
        </article>
        <br />
        <article className="flex flex-col justify-center items-center">
          <h2 className="text-green-950 text-xl">
            Complete Mobile Health goes beyond physical health to focus on ﬁve
            dimensions of wellbeing.
          </h2>
          {/* //! BIIIIIIG IMAGE */}
        </article>
        <article>
          <h2 className="text-green-800 font-bold text-2xl">
            Our Coaching Process
          </h2>
          <p className="bg-green-200 rounded-lg">Build resilience</p>
          <p className="">Reframe negative thoughts</p>
          <p className="bg-green-200 rounded-lg">Focus on positivity</p>
          <p className="">Identify strengths</p>
          <p className="bg-green-200 rounded-lg">Create a plan for change</p>
          <p className="">Expect accountability</p>
        </article>
        <br />
        <article>
          <h2 className="flex justify-center items-center text-green-800 font-bold text-2xl">
            Tracking Coaching Outcomes
          </h2>
          <div className="flex flex-col md:flex-row w-full h-fit">
            <ParagraphCard
              title="Participation Data"
              content="Eligibility, Enrollment,
              Engagement"
              linkPath=""
            />
            <ParagraphCard
              title="Outcomes Data"
              content="Sessions scheduled/completes
                        Participant identiﬁed goals
                        Changes in health score
                        Changes in 5 dimensions of wellbeing"
              linkPath=""
            />
            <ParagraphCard
              title="Participant Satisfaction"
              content="Participant Surveys"
              linkPath=""
            />
          </div>
        </article>
        <br />
        <article>
          <h2 className="flex justify-center items-center text-green-900 text-3xl font-bold">
            Health Coaching
          </h2>
          <h3 className="text-green-800 font-bold text-xl">
            Learn Your Levels Report and Lifestyle Assessment Consultation with
            a Certified Health Coach
          </h3>
          <p>
            Twenty-minute onsite consultation provided for 15 or more
            participants. Telephonic consult 14 or less <br />
            Based on 3 consults per hour
          </p>
        </article>
        <br />
        <article>
          <h2 className="text-green-800 font-bold text-2xl">
            Ongoing Health Coaching
          </h2>
          <p>
            Participant eligibility for coaching based on Learn Your Levels
            (LYL) Criteria
          </p>
          <ul className="pl-4 list-decimal text-black">
            <li>Individuals with a score of 49 or less</li>
            <li>
              Individuals in serious or high-risk category for metabolic
              syndrome
            </li>
            <li>Positive tobacco status</li>
          </ul>
          <br />
          <p>
            Four twenty-minute health coaching sessions scheduled telephonically
            or at the worksite
          </p>
          <br />
          <p>
            First Coaching session starts with Learn Your Levels & Lifestyle
            Assessment report consult
          </p>
        </article>
      </section>
    </div>
  );
};

export default page;
