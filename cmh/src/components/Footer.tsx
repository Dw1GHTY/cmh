import React from "react";

interface FooterProps {
  styles: string;
}

const Footer: React.FC<FooterProps> = ({ styles }) => {
  return <footer className={styles + " "}>Footer</footer>;
};

export default Footer;
