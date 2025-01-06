import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { toLowerCaseUnderscores } from "../../../lib/utils";

interface DropdownMenuProps {
  links: string[];
}

const NavDropdownMenu: React.FC<DropdownMenuProps> = ({ links }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-10 px-1 font-semibold rounded-md hover:bg-green-600 hover:text-white">
        Corporate Wellness Services
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuItem asChild>
          <Link
            className="hover:bg-green-200 rounded-md"
            href="/corporate_wellness"
          >
            Our services
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-green-400 w-full h-0.5 rounded-lg shadow-sm shadow-green-300" />
        {links.map((link, index) => {
          return (
            <DropdownMenuItem asChild key={index}>
              <Link
                className="hover:bg-green-200 rounded-md"
                href={`/corporate_wellness/${toLowerCaseUnderscores(link)}`}
              >
                {link}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdownMenu;
