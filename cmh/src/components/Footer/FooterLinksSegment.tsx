import React from "react";
import FooterLink from "./FooterLink";

type TFooterLink = {
  component?: React.ReactNode;
  name?: string;
  linkPath?: string;
};

interface FooterLinksSegmentProps {
  links: Array<TFooterLink>;
}

const FooterLinksSegment: React.FC<FooterLinksSegmentProps> = ({ links }) => {
  return (
    <section className="flex flex-col space-y-2 mx-4">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          {link.component ? (
            link.component
          ) : (
            <FooterLink linkName={link.name} linkPath={link.linkPath} />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default FooterLinksSegment;
