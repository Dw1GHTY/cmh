import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";

interface ParagraphCardProps {
  title: string;
  content: string;
  linkPath: string;
}

const ParagraphCard: React.FC<ParagraphCardProps> = ({
  title,
  content,
  linkPath,
}) => {
  return (
    <section className="w-full h-fit md:w-1/2 my-3 bg-opacity-85 shadow-lg">
      <Card>
        <CardHeader>
          <CardTitle>
            <Link href={linkPath} className="hover:text-green-900">
              {title}
            </Link>
          </CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        {linkPath && (
          <CardFooter>
            <Link
              className="size-fit p-1 rounded-sm bg-green-800 text-white hover:bg-green-600"
              href={linkPath}
            >
              More Details
            </Link>
          </CardFooter>
        )}
      </Card>
    </section>
  );
};

export default ParagraphCard;
