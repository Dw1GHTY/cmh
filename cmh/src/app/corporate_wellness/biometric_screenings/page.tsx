import Article from "@/components/Article";
import PageImage from "@/components/PageImage";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <PageImage
        title="Biometric Screenings"
        path="/biometric_screening_cover.jpg"
        subtitle=""
      />
      <section className="flex flex-col justify-center items-center w-5/6 md:w-3/5">
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
            "During a screening we measure a variety of metrics of blood and biometrics measurements. Although Complete Mobile Health can offer most labs (nicotine, PSA, etc.) the most standard blood panel screen is lipids and glucose.  The method of collection is offered in both venipuncture and finger stick; both with fasting and non-fasting options.  Biometrics measurements include height, weight, blood pressure and BMI with or without waist circumference.  Your screener will provide a brief review of data collected.  In-depth consultations can be provided on-site as an enhanced screening service.",
            "Once the screening process is finished and lab results are available, data is uploaded to a secure processing system and reports are generated.",
          ]}
        />
        <Article
          title="Customizable Wellness Screening Options"
          paragraps={[
            "Complete Mobile Health offers customizable screening, based on the needs of your company. With our online scheduling system you will be able to customize your screening options from your desk. Unlike alternative programs, Complete Mobile Health screening is flexible and tailored to your company’s needs. Blood testing can be performed with the choice of venipuncture or finger stick, fasting or non-fasting. The finger stick option will provide immediate data; a venipuncture draw will be sent to one of our certified labs for analysis.  After labs are process the data is uploaded and ready for report production and distribution.",
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
            "For large populations with employees at a single location, Complete Mobile Health uses a propitiatory a data collection system, operated via iPad. Our system offers faster and more accurate data transmissions for larger groups. With this software, we are able to accommodate multiple appointments and schedules for screenings at companies with 400+ employees.  The employee is able to view their data before it is transmitted and will digitally sign to verify their personal information is accurate.",
          ]}
        />
      </section>
    </div>
  );
};

export default page;
