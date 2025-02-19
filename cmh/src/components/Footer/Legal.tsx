import React from "react";

interface LegalProps {
  text?: string;
}

const Legal: React.FC<LegalProps> = ({ text }) => {
  return <p className="flex text-center text-wrap text-sm mt-2">{text}</p>;
};

export default Legal;
