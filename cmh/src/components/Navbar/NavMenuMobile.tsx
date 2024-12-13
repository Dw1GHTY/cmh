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
import { TDropDownLinks } from "@/types/TMobileNavLink";
import { toLowerCaseUnderscores } from "../../../utils/utils";

interface NavMenuMobileProps {
  dropDownLinks: Array<TDropDownLinks>;
}

const NavMenuMobile: React.FC<NavMenuMobileProps> = ({ dropDownLinks }) => {
  return (
    <div className="md:hidden flex size-fit items-center justify-center bg-green-400 border-green-300 border-2 rounded-md hover:bg-green-300 hover:border-gray-400">
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="flex justify-center items-center size-16"
        >
          <Menu className="flex" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white bg-opacity-60 border-2 space-y-1 border-green-700 rounded-sm">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-green-400 w-full h-1" />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              Corporate Wellness Services
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="">
                {dropDownLinks.map((link, index) => {
                  return (
                    <DropdownMenuItem key={index}>
                      <Link
                        href={`/corporate_wellness/${toLowerCaseUnderscores(
                          link.linkName
                        )}`}
                      >
                        {link.linkName}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Link href="/flu_shots">Flu Shot</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/partnering">Partnering</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavMenuMobile;
