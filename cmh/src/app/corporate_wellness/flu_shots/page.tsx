import PageImage from "@/components/Content/PageImage";
import Paragraph from "@/components/Content/Paragraph";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full h-full flex-col justify-center items-center">
      <PageImage
        path="/flu_shot_cover.jpg"
        title="Flu Shot Clinics Made Easy"
        subtitle=""
      />
      <div className="flex flex-col w-full md:w-5/6 my-4 h-fit">
        <section className="flex flex-col size-fit bg-white rounded-md shadow-md p-2">
          <h2 className="flex bg-white text-black text-2xl justify-center items-center">
            Customizing affordable on-site flu shot clinics nationwide since
            1988
          </h2>
          <br />
          <article>
            <Paragraph
              title="We Handle the Details of Your On-Site Flu Shot Clinic"
              text="You’re busy. No worries. Count on us to customize a flexible, affordable on-site flu shot clinic that meets your needs. We’ve provided clinics for hundreds of employers over the last decade and have the logistics, processes and resources in place to ensure your success. We’re also nationally approved for Medicare, and we offer on-site flu shot services to senior living and intermediate care facilities."
            />
            <br />
            <Paragraph
              title="Multiple sites? Multiple shifts? No Problem!"
              text="Many of our clients require us to be at different sites during the day and in the evening. We have the nation-wide and local resources to cover your specific needs."
            />
            <br />
            <Paragraph
              title="Reliable and Safe"
              text="With over a decade of experience, Complete Mobile Health provides highly trained RNs, NPs and MDs to administer flu vaccinations. We abide by all government safety standards. Even during the H1N1 crisis, we secured and delivered vaccinations for all of our on-site clinics, as promised."
            />
            <br />
            <h3 className="text-green-600 text-lg">Competitive Pricing</h3>
            <p>
              We know your bottom line is important. That’s why Complete Mobile
              Health offers volume discounts. And, we’re Medicare approved for
              vaccinations.
            </p>
            <p>
              Complete Mobile Health Testing Services Bills Insurance or
              Medicare Directly when applicable.
            </p>
            <br />
            <h4 className="text-black font-semibold">For More Information</h4>
            <p>
              Need information on how Complete Mobile Health can help administer
              your company’s Flu Vaccine Clinic? Please contact Jo Steinberg at
              414-213-6543, Nickibenson@completemobile-health.com or use our
              On-Site Flu Shot Clinic Quote Request.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default page;
