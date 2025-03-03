import Article from "@/components/Content/Article";
import PageImage from "@/components/Content/PageImage";
import React from "react";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "DNA Paternity Testing | Complete Mobile Health",
  description:
    "Accurate and confidential DNA paternity testing services with fast results.",
  openGraph: {
    title: "Need DNA Paternity Testing? Get Fast & Reliable Results!",
    description:
      "Complete Mobile Health offers professional DNA paternity testing services with confidentiality and accuracy.",
    images: "https://completemobile-health.com/dna_test.png",
    url: "https://completemobile-health.com/corporate_wellness/dna_paternity_testing",
    type: "article",
  },
});

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <PageImage
        path="/dna_test_cover.jpeg"
        title="DNA Paternity Testing"
        subtitle=""
      />
      <div className="flex flex-col w-5/6 md:w-1/2 h-fit my-4">
        <Article
          title="Complete and accurate DNA paternity test collections"
          paragraps={[
            "A meticulously trained staff of health professionals in our more than 230 service locations provide our clients with complete and accurate DNA paternity test collections.",
            "We provide both buccal swab and fresh blood for DNA paternity testing. Legal DNA tests are usually accompanied by a photo and sometimes a fingerprint (depending on the state). In those cases, we observe Chain of Custody collection for legal collections. We can also collect for a non-legal paternity test and arrange to have the sample sent to a laboratory, but the result will not be legally binding.",
            "We understand the sensitive nature of DNA paternity testing and ensure complete patient confidentiality. We collect most samples within 24 to 48 hours of a request and provide a fast turnaround time on results.",
            "Contact us for more information on how we can assist your organization with DNA Paternity Testing or find our more about our other paramedical services.",
          ]}
        />
      </div>
    </div>
  );
};

export default page;
