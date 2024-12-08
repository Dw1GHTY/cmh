import React from "react";

interface NavbarProps {
  styles: string;
}

const Navbar: React.FC<NavbarProps> = ({ styles }) => {
  return <nav className={styles + ""}>Navbar</nav>;
};

export default Navbar;
