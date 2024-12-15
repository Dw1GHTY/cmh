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
  triggerName: string;
  triggerStyle: string;
  children: React.ReactNode;
}

const ContactDialog: React.FC<ContactDialogProps> = ({
  children,
  triggerName,
  triggerStyle,
}) => {
  return (
    <Dialog>
      <DialogTrigger className={`${triggerStyle} `}>
        {triggerName}
      </DialogTrigger>
      <DialogContent>
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
