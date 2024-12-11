import React from "react";

interface ContactProps {
  phoneNumber?: string;
  email?: string;
  style: string;
}

const Contact: React.FC<ContactProps> = ({ phoneNumber, email, style }) => {
  return (
    <div className={style + " "}>
      {phoneNumber} {email}
    </div>
  );
};

export default Contact;
