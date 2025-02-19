import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface FooterLinkProps {
  linkName?: string;
  linkPath?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ linkName, linkPath }) => {
  return (
    <div>
      <Link
        className="flex justify-center items-center size-fit underline 
        hover:text-green-900 transition delay-75 hover:shadow-lg shadow-black rounded-md"
        href={`${linkPath}`}
      >
        <ChevronRight className="text-green-900 size-4" />
        {linkName}
      </Link>
    </div>
  );
};

export default FooterLink;
