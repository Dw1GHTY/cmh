import React from "react";
import Logo from "../Logo";
import NavMenu from "./NavMenu";
import Contact from "../Contact";
import NavMenuMobile from "./NavMenuMobile";

interface NavbarProps {
  styles: string;
}

//TODO: Proslediti string[] ka NavMenu i NavMenuMobile za dinamicki render
//! Paziti na dropdown-ove, mozda mora manuelni da budu

const Navbar: React.FC<NavbarProps> = ({ styles }) => {
  return (
    <nav className={styles + ""}>
      <div className="flex justify-between w-full md:flex md:flex-row md:justify-center md:items-center md:w-5/6">
        <Logo />
        <NavMenu />
        <NavMenuMobile />
        <Contact />
      </div>
    </nav>
  );
};

export default Navbar;
