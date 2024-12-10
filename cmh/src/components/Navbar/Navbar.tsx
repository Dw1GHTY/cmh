import React from "react";
import Logo from "../Logo";
import NavMenu from "./NavMenu";
import Contact from "../Contact";
import NavMenuMobile from "./NavMenuMobile";

interface NavbarProps {
  styles: string;
}

const links: Array<Link> = [
  {
    name: "Corporate Health Services",
    sublinks: ["link1testestest", "link2", "link3"],
  },
  { name: "Flu Shots" },
  { name: "Partnering" },
];

const Navbar: React.FC<NavbarProps> = ({ styles }) => {
  return (
    <nav className={styles + ""}>
      <div className="flex justify-between w-full md:flex md:flex-row md:justify-center md:items-center md:w-5/6">
        <Logo />
        <NavMenu links={links} />
        <NavMenuMobile />
        <Contact phoneNumber="00123123" email="example@email.com" />
      </div>
    </nav>
  );
};

export default Navbar;
