import React from "react";
import FooterLink from "./FooterLink";
import FooterContact from "./FooterContact";
import { TFooterLink } from "@/types/TFooterLink";

interface FooterLinksSegmentProps {
  links: Array<TFooterLink>;
}

const FooterLinksSegment: React.FC<FooterLinksSegmentProps> = ({ links }) => {
  return (
    <section className="flex flex-col space-y-2 mx-4">
      {links.map((link, index) => {
        if (link.linkPath == "contact") {
          return <FooterContact key={index} />;
        } else {
          return (
            <FooterLink
              key={index}
              linkName={link.name}
              linkPath={link.linkPath}
            />
          );
        }
      })}
    </section>
  );
};

export default FooterLinksSegment;
