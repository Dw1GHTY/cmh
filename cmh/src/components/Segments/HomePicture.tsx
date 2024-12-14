import Image from "next/image";
import React from "react";
import ContactDialog from "../Dialog/ContactDialog";
import ContactForm from "../Forms/ContactForm";
import ApplicationForm from "../Forms/ApplicationForm";

const HomePicture: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-auto overflow-hidden rounded-md shadow-lg aspect-[16/9] md:aspect-[16/9] shadow-green-900">
      <Image
        src="/stock1.png"
        alt="Blood test"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 70vw"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/20 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Complete Mobile Health Is Your Corporate Wellness Company
        </h1>
        <p className="text-sm md:text-lg text-center">
          Custom corporate wellness programs for your employees. On site
          biometric screenings, blood testing and reporting.
        </p>
        <div className="flex flex-wrap flex-shrink gap-4 justify-center items-center mt-2">
          <ContactDialog triggerName="Have a question?">
            <ContactForm />
          </ContactDialog>
          <ContactDialog triggerName="Want to partner with us?">
            <ApplicationForm />
          </ContactDialog>
        </div>
      </div>
    </div>
  );
};

export default HomePicture;
