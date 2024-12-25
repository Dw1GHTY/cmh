import Article from "@/components/Article";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h1 className="text-white text-4xl font-semibold">Wellness Screenings</h1>
      <section className="flex flex-col justify-center items-center w-full mt-24 md:w-1/2">
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
            "During a screening we measure a variety of metrics of blood and biometrics measurements. Although Complete Mobile Health can offer most labs (nicotine, PSA, etc.) the most standard blood panel screen is lipids and glucose.  The method of collection is offered in both venipuncture and finger stick; both with fasting and non-fasting options.  Biometrics measurements include height, weight, blood pressure and BMI with or without waist circumference.  Your screener will provide a brief review of data collected.  In-depth consultations can be provided on-site as an enhanced screening service. ",
            "Once the screening process is finished and lab results are available, data is uploaded to a secure processing system and reports are generated.",
          ]}
        />
        <Article
          title="Customizable Health Screening Options"
          paragraps={[
            "Complete Mobile Health offers customizable screening, based on the needs of your company. With our online scheduling system you will be able to customize your screening options from your desk. Unlike alternative programs, Complete Mobile Health screening is flexible and tailored to your company’s needs. Blood testing can be performed with the choice of venipuncture or finger stick, fasting or non-fasting. The finger stick option will provide immediate data; a venipuncture draw will be sent to one of our certified labs for analysis.  After labs are process the data is uploaded and ready for report production and distribution.",
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
            "For large populations employees at a single location, Complete Mobile Health uses MoxieMetrics software, a data collection system created by Complete Mobile Health, operated via iPad. MoxieMetrics offers faster and more accurate data transmissions for larger groups. With this software, we are able to accommodate multiple appointments and schedules for screenings at companies with 400+ employees.  The employee is able to view their data before it is transmitted and will digitally sign to verify their personal information is accurate.",
            "We are here to make your life healthier and easier, Contact Us to learn more about how we can help.",
          ]}
        />
        <Article
          title="What is your state of wellness?"
          paragraps={[
            "The first step to living a healthier life begins with knowing your current state of wellness.",
            "We offer the Personal Wellness Profile (PWP Advantage) as our Health Risk Assessment tool. PWP Advantage combines the data driven results from the on-site screening (smoking habits, BMI, systolic and diastolic BP, total cholesterol, HDL, LDL, triglycerides and glucose) with the results from a supplemental Lifestyle Questionnaire to create a robust health assessment report.",
            "The HRA provides multiple reports. There is a Participant Report that can be used by the employee on an individual and private basis as well as multiple aggregate reports for program directors to use as an assessment tool for their company population health as a whole.",
          ]}
        />
        <Article
          title="What is the Personal Wellness Profile Advantage?"
          paragraps={[
            "With the combination of the on-site screening results and the Lifestyle Questionnaire, your PWP provides a risk report, both for you as an individual as well as your company as a whole, and extensive health improvement resources based on the results from those risk reports.",
          ]}
        />
      </section>
    </div>
  );
};

export default page;
