import React from "react";

interface ContactProps {
  phoneNumber?: string;
  email?: string;
}

const Contact: React.FC<ContactProps> = ({ phoneNumber, email }) => {
  return (
    <div className=" hidden md:flex ml-4 ">
      {phoneNumber} <br />
      {email}
    </div>
  );
};

export default Contact;
