import React from "react";
import Logo from "../Logo";

interface FooterProps {
  styles: string;
}

const Footer: React.FC<FooterProps> = ({ styles }) => {
  return (
    <footer className={styles + "p-1"}>
      <Logo />
    </footer>
  );
};

export default Footer;
