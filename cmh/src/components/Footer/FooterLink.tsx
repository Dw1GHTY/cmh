import Link from "next/link";
import React from "react";

interface FooterLinkProps {
  linkName: string;
  linkPath: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ linkName, linkPath }) => {
  return (
    <div>
      <Link
        className="flex size-fit underline hover:text-green-900"
        href={`${linkPath}`}
      >
        {linkName}
      </Link>
    </div>
  );
};

export default FooterLink;
