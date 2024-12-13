import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface InfoCardProps {
  title?: string;
  content?: string;
  linkPath: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content, linkPath }) => {
  return (
    <Card className="w-[300px] max-w-full border-gray-300 border bg-green-300 text-black opacity-75">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm break-words">{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link
          href={`./${linkPath}`}
          className="px-4 py-2 bg-green-800 text-white hover:bg-green-400 cursor-pointer rounded-md"
        >
          Learn More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default InfoCard;
