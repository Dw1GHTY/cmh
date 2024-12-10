import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ArrowDown } from "lucide-react";
import React from "react";

interface NavDropdownProps {
  dropDownName: string;
  dropDownLinks: string[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  dropDownName,
  dropDownLinks,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex flex-row justify-center items-center size-fit rounded-md p-2 hover:bg-green-300 font-semibold">
        {dropDownName}
        <ArrowDown className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit bg-slate-200 border-2 space-y-1 border-green-700 rounded-sm">
        <DropdownMenuSeparator />
        {dropDownLinks.map((link) => {
          return <DropdownMenuItem>{link}</DropdownMenuItem>;
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdown;
