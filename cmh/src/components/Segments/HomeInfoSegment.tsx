import React from "react";
import InfoCard from "../Cards/InfoCard";

const HomeInfoSegment: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h1 className="flex justify-center items-center text-2xl">
        Wellness and health programs designed for You!
      </h1>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center md:space-x-2">
        <InfoCard
          title="Flu Shot Clinics"
          content="We have provided affordable onsite flu shot services for hundreds of employers, with over a decade of experience providing logistics, processes and resources to ensure your success"
          linkPath="flu_shots"
        />
        <InfoCard
          title="Corporate Wellness"
          content="Our Suite of Corporate Wellness Services includes: Health Coaching, Wellness Platform, Flu Shot Clinics, Biometric Screenings, Drug Testing, and more..."
          linkPath="corporate_wellness"
        />
        <InfoCard
          title="Biometric Screening"
          content="Stabilize your health premiums and learn about your employees wellness with our onsite biometric screenings, testing and reporting."
          linkPath="corporate_wellness/biometric_screenings"
        />
        <InfoCard
          title="DNA Paternity testing"
          content="Accessible paternity testing"
          linkPath="corporate_wellness/dna_paternity_testing"
        />
      </div>
    </div>
  );
};

export default HomeInfoSegment;
