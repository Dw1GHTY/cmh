import React from "react";
import ContactDialog from "./Dialog/ContactDialog";
import ContactForm from "./Forms/ContactForm";

interface ContactProps {
  // phoneNumber?: string;
  email?: string;
  style: string;
}

const Contact: React.FC<ContactProps> = ({ email, style }) => {
  return (
    <div className={style + " "}>
      <ContactDialog triggerName={`${email}`}>
        <ContactForm />
      </ContactDialog>
    </div>
  );
};

export default Contact;
