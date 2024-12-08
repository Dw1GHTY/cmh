import React from "react";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className=" hidden md:flex ml-4 border-1 border-green-950">
      Contact
    </div>
  );
};

export default Contact;
