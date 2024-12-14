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
  children: React.ReactNode;
}

const ContactDialog: React.FC<ContactDialogProps> = ({
  children,
  triggerName,
}) => {
  return (
    <Dialog>
      <DialogTrigger className="bg-green-400 text-black rounded-md size-fit p-2 hover:bg-green-200">
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
