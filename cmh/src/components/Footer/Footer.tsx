import React from "react";
import Logo from "../Logo";
import Contact from "../Contact";
import Legal from "./Legal";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center md:flex-row  bg-green-500 h-fit first-letter:p-1 md:justify-between px-2">
      {/* //? Logo */}
      <Logo />

      {/* //? InfoSection - multiple | with links or without */}

      {/* //? Contact */}
      <Contact
        style="flex justify-center border-2 border-black items-center"
        email="Nickibenson@completemobile-health.com"
      />
      {/*//? Legal */}
      <Legal text="Complete Mobile Health Ⓡ All Rights Reserved" />
    </footer>
  );
};

export default Footer;
