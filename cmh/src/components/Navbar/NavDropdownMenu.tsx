import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface DropdownMenuProps {
  name: string;
  links: string[];
}

const NavDropdownMenu: React.FC = () => {
  const router = useRouter();

  return (
    <div className="border-1 border-black rounded-md">
      <DropdownMenu>
        <DropdownMenuTrigger>Corporate Wellness Services</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Our services</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="./corporate_wellness/health_coaching_program">
              Health coaching program
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Biometric Screenings</DropdownMenuItem>
          <DropdownMenuItem>Drug Testing Services</DropdownMenuItem>
          <DropdownMenuItem>DNA Paternity Testing</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavDropdownMenu;
