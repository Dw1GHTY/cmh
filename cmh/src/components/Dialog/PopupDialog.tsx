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
            <span>{dialogTitle}</span>
          </DialogTitle>
          {children ? children : <></>}
          <DialogDescription>
            <span>{dialogDescription}</span>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PopupDialog;
