import React from "react";

interface LegalProps {
  text?: string;
}

const Legal: React.FC<LegalProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default Legal;
