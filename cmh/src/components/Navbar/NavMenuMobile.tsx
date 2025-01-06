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
import {
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

type Link = {
  name: string;
  path: string;
};

type DropdownLink = {
  name: string;
  links: Array<Link>;
};

interface NavMenuMobileProps {
  hamburgerLinks: Array<Link> | null;
  hamburgerDropdowns: Array<DropdownLink> | null;
}

const NavMenuMobile: React.FC<NavMenuMobileProps> = ({
  hamburgerLinks,
  hamburgerDropdowns,
}) => {
  return (
    <div className="md:hidden flex size-fit items-center justify-center bg-transparent rounded-md">
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="flex justify-center items-center size-16 p-3"
        >
          <Menu className="flex" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="
        bg-white border-2 space-y-1 border-none rounded-sm"
        >
          <DropdownMenuLabel className="flex justify-center items-center font-semibold">
            Menu
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-green-400 w-full h-0.5 rounded-lg shadow-sm shadow-green-300 mx-1" />
          {/*//! DYNAMIC START */}
          {hamburgerLinks?.map((link, index) => {
            return (
              <DropdownMenuItem asChild key={index} className="flex size-full">
                <Link
                  href={link.path}
                  className="flex size-full justify-center items-center rounded-md hover:bg-green-200"
                >
                  {link.name}
                </Link>
              </DropdownMenuItem>
            );
          })}
          {hamburgerDropdowns?.map((dropdown, index) => {
            return (
              <DropdownMenuSub key={index}>
                <DropdownMenuSubTrigger className="text-md hover:bg-green-200">
                  {dropdown.name}
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent
                    sideOffset={-80}
                    alignOffset={30}
                    className=""
                  >
                    {dropdown.links.map((link, link_index) => {
                      return (
                        <DropdownMenuItem
                          asChild
                          key={link_index}
                          className="flex size-full hover:bg-green-200 rounded-md "
                        >
                          <Link
                            href={link.path}
                            className="flex size-full justify-center items-center "
                          >
                            {link.name}
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            );
          })}

          {/* //!DYNAMIC END */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavMenuMobile;
