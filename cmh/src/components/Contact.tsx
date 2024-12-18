import React from "react";
import ContactDialog from "./Dialog/ContactDialog";
import ContactForm from "./Forms/ContactForm";

interface ContactProps {
  // phoneNumber?: string;
  email?: string;
  phone?: string;
  style: string;
}

const Contact: React.FC<ContactProps> = ({ email, phone, style }) => {
  return (
    <div className={style + " "}>
      <ContactDialog
        triggerStyle=""
        triggerEmail={`${email}`}
        triggerPhone={`${phone}`}
      >
        <ContactForm />
      </ContactDialog>
    </div>
  );
};

export default Contact;
