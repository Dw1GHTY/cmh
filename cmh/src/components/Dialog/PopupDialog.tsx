import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

interface PopupDialogProps {
  triggerStyle?: string;
  triggerText?: string[];
  dialogTitle?: string;
  dialogDescription?: string;
  children?: React.ReactNode;
}

const PopupDialog: React.FC<PopupDialogProps> = (props) => {
  const {
    triggerStyle,
    triggerText,
    dialogTitle,
    dialogDescription,
    children,
  } = props;
  return (
    <Dialog>
      <DialogTrigger
        className={`${triggerStyle} flex flex-col justify-center items-center`}
      >
        {triggerText?.map((text, index) => {
          return <span key={index}>{text}</span>;
        })}
      </DialogTrigger>
      <DialogContent className="mx-1 rounded-md">
        <DialogHeader>
          <DialogTitle>
            {/* Provide your contact information so we can get in touch */}
            <span>{dialogTitle}</span>
          </DialogTitle>
          {/* //? in place of children place forms */}
          {children ? children : <></>}
          <DialogDescription>
            {/* By pressing submit, an email will be sent to us with your provided
              information, we will get in touch as soon as possible. */}
            <span>{dialogDescription}</span>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PopupDialog;
