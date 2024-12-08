import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import React from "react";

const NavMenuMobile: React.FC = () => {
  return (
    <div className="md:hidden flex size-fit items-center justify-center bg-green-400 border-green-300 border-2 rounded-md hover:bg-green-300 hover:border-gray-400">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex justify-center items-center size-16">
          <Menu className="" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-200 border-2 space-y-1 border-green-700 rounded-sm">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-green-400 w-full h-1" />
          <DropdownMenuItem>Flu Shot</DropdownMenuItem>
          <DropdownMenuItem>Corporate Wellness Services</DropdownMenuItem>
          <DropdownMenuItem>Partnering</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavMenuMobile;
