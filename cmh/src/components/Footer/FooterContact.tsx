import React from "react";
import ContactDialog from "../Dialog/ContactDialog";
import ContactForm from "../Forms/ContactForm";

const FooterContact = () => {
  return (
    <div className="">
      <ContactDialog
        triggerPhone=""
        triggerEmail="Contact Complete Mobile Health"
        triggerStyle="text-left underline hover:text-green-800"
      >
        <ContactForm />
      </ContactDialog>
    </div>
  );
};

export default FooterContact;
