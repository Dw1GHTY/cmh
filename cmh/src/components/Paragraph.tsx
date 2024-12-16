import React from "react";

interface ParagraphProps {
  title: string;
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ title, text }) => {
  return (
    <>
      <h3 className="text-green-600 text-lg">{title}</h3>
      <p className="text-black">{text}</p>
    </>
  );
};

export default Paragraph;
