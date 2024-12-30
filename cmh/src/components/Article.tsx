import React from "react";
import { Separator } from "./ui/separator";

interface ArticleProps {
  title: string;
  paragraps: string[];
}

const Article: React.FC<ArticleProps> = ({ title, paragraps }) => {
  return (
    <article className="flex flex-col justify-start bg-white w-full h-fit my-3 p-4 rounded-md shadow-md">
      <h3 className="text-green-600 text-xl">{title}</h3>
      <Separator className="h-0.5 w-1/2 bg-green-400 rounded-md my-2" />
      {paragraps.map((paragraph, index) => (
        <p key={index} className="text-gray-700 mb-4">
          {paragraph}
        </p>
      ))}
    </article>
  );
};

export default Article;
