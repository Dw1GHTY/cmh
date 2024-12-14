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
      <DropdownMenuTrigger className="h-10 px-1 rounded-md hover:bg-green-400">
        Corporate Wellness Services
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="/corporate_wellness">Our services</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {links.map((link, index) => {
          return (
            <DropdownMenuItem key={index}>
              <Link
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
