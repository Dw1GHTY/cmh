import Article from "@/components/Content/Article";
import PageImage from "@/components/Content/PageImage";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <PageImage
        title="Pofessional Certifications"
        subtitle=""
        path="/certifications.jpg"
      />
      <section className="flex flex-col justify-center items-center w-full md:w-3/5">
        <Article
          title="Disadvantaged Business Enterprise"
          component={
            <Image
              src={`/certifications-dbe.jpg`}
              alt="dbe certification logo"
              width={150}
              height={150}
              className="rounded-full"
            />
          }
          paragraps={[
            "Complete Mobile Health is a Department of Transportation certified Disadvantaged Business Enterprise. Partnering with Complete Mobile may fulfill government-driven obligations. Learn about what it means to be DBE Certified.",
            "To be certified as a DBE, a firm must be a small business owned and controlled by socially and economically disadvantaged individuals. Certifiers make the determination based upon on site visits, personal interviews, reviews of licenses, stock ownership, bonding capacity, work completed, resume of principal owners, and financial capacity.",
          ]}
        />
        {/* <Article
          title="Women’s Business Enterprise National Council (WBENC)"
          component={
            <Image
              src={`/certifications-wbenc.png`}
              alt="wbenc certification logo"
              width={150}
              height={150}
              className=""
            />
          }
          paragraps={[
            "As a Women Owned Business, Complete Mobile Health is WBENC Certified by the LINKWomen’s Business Enterprise National CouncilLINKHREFhttps://www.wbenc.org/certification/.",
            "Certification is one of WBENC’s three core values: Certification, Opportunities, and Resources. Certifying women owned businesses is the foundation of WBENC’s mission, along with connecting WBENC-Certified Women’s Business Enterprises (WBEs) with WBENC’s Corporate Members to facilitate real time business opportunities and serving as a Resource to offer training that helps the Corporate Member and the WBENC-Certified WBE grow their capacity. WBENC Certification validates that the business is 51 percent owned, controlled, operated, and managed by a woman or women.",
            "To achieve WBENC Certification, women owned businesses complete a formal documentation and site visit process which is administered by one of WBENC’s 14 Regional Partner Organizations. WBENC Certification gives women owned businesses the ability to compete for real-time business opportunities provided by WBENC Corporate Members and government agencies.",
          ]}
        /> */}
      </section>
    </div>
  );
};

export default page;
