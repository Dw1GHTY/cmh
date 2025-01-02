import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface ContactDialogProps {
  triggerEmail: string;
  triggerPhone: string;
  triggerStyle: string;
  children: React.ReactNode;
}

const ContactDialog: React.FC<ContactDialogProps> = ({
  children,
  triggerEmail,
  triggerPhone,
  triggerStyle,
}) => {
  return (
    <Dialog>
      <DialogTrigger
        className={`${triggerStyle} flex flex-col justify-center items-center`}
      >
        <p>{triggerEmail}</p>
        <p>{triggerPhone}</p>
      </DialogTrigger>
      <DialogContent className="mx-1 rounded-md">
        <DialogHeader>
          <DialogTitle>
            <span>Provide your contact information so we can get in touch</span>
          </DialogTitle>
          {children}
          <DialogDescription>
            <span>
              By pressing submit, an email will be sent to us with your provided
              information, we will get in touch as soon as possible.
            </span>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
