import React from "react";

interface NavDropdownProps {
  name: string;
  links: string[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ name, links }) => {
  return <div>NavDropdown</div>;
};

export default NavDropdown;
