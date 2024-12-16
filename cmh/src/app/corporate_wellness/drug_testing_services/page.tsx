import PageImage from "@/components/PageImage";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <PageImage
        path="/drug_test_cover.jpg"
        title="Drug Testing Service"
        subtitle=""
      />
      <div className="flex flex-col items-center w-5/6 md:w-1/2 h-fit my-4">
        <section className="flex flex-col size-fit bg-white rounded-md shadow-md p-2">
          <h2 className="bg-white text-black text-2xl">
            Drug Testing Services for Employers Nationwide
          </h2>
          <br />
          <article>
            <p>
              As an employer, you don’t always know if there’s a problem with
              substance abuse by looking at an employee or reviewing an
              application. That’s why drug screening is so important in the
              workplace.
            </p>
            <br />
            <p>
              Midland offers complete non-DOT and DOT-regulated alcohol and drug
              testing collection services for pre-employment, random, return to
              duty, follow-up, reasonable cause, reasonable suspicion and
              post-accident drug testing.
            </p>
            <br />
            <p>
              Whether you require hair, oral fluid, urine or blood collections,
              our fast and professional collectors follow very stringent
              collection protocols, producing the highest quality laboratory
              drug testing results and eliminating the many canceled, rejected
              or troubled specimens due to poorly trained or inexperienced
              collectors.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default page;
