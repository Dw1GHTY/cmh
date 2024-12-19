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
import { toLowerCaseUnderscores } from "../../../lib/utils";

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
        <DropdownMenuContent className="bg-white border-2 space-y-1 border-green-700 rounded-sm">
          <DropdownMenuLabel className="flex justify-center items-center">
            Menu
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-green-400 w-full h-1" />
          {/*//? Dynamic here */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="text-">
              Corporate Wellness Services
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="">
                {dropDownLinks.map((link, index) => {
                  return (
                    <DropdownMenuItem key={index}>
                      <Link
                        className="hover:bg-slate-200 w-full rounded-md my-1 p-1"
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
          <DropdownMenuItem className="flex justify-center items-center">
            <Link
              href="/corporate_wellness"
              className="hover:bg-slate-200 flex justify-center items-center w-full rounded-md my-1 p-1"
            >
              Our Services
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="flex justify-center items-center">
            <Link
              className="flex items-center justify-center hover:bg-slate-200"
              href="/corporate_wellness/flu_shots"
            >
              Flu Shot
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-center items-center">
            <Link
              className="flex items-center justify-center hover:bg-slate-200"
              href="/partnering"
            >
              Partnering
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavMenuMobile;
