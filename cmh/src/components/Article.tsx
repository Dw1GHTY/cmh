import React from "react";
import { Separator } from "./ui/separator";

interface ArticleProps {
  title: string;
  paragraps: string[];
  component?: React.ReactNode;
}

//TODO: mark links in the paragraphs array of string with bits, create a link tag
//TODO: in the text that is marked as such to the path which is in caps: LINK

//TODO: same way, make a FLAG to mark the position the ReactNode should go
//!Example: <Article paragraphs={["This is text and <this is a link> CON text texfsS CON "]}

const Article: React.FC<ArticleProps> = (props) => {
  const { title, paragraps } = props;
  return (
    <article className="flex flex-col justify-start bg-white w-full h-fit my-3 p-4 rounded-md shadow-md">
      <h3 className="text-green-600 text-xl">{title}</h3>
      <Separator className="h-0.5 w-1/2 bg-green-400 rounded-md" />
      <br />
      {paragraps.map((parag, index) => {
        //? 0-based index
        return (
          <>
            <p key={index} className="text-black">
              {parag}
            </p>
            <br />
          </>
        );
      })}
    </article>
  );
};

export default Article;
