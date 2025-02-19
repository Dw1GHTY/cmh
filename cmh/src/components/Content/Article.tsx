import React from "react";
import { Separator } from "../ui/separator";

interface ArticleProps {
  title: string;
  paragraps: Array<string | React.ReactNode>;
  component?: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({ title, paragraps, component }) => {
  return (
    <article className="flex flex-col justify-start bg-white w-full h-fit my-3 p-4 rounded-md shadow-md">
      <h3 className="text-green-600 text-xl">{title}</h3>
      {component ? component : <></>}
      <Separator className="h-0.5 w-1/2 bg-green-400 rounded-md my-2" />
      {paragraps.map((paragraph, index) =>
        typeof paragraph === "string" ? (
          <p key={index} className="text-gray-700 mb-4">
            {paragraph}
          </p>
        ) : (
          paragraph //! if not a string render component
        )
      )}
    </article>
  );
};

export default Article;
