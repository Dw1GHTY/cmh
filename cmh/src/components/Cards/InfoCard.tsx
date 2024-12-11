import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface InfoCardProps {
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
  header?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  content,
  footer,
  header,
}) => {
  return (
    <Card className="w-fit border-gray-300 border-1 bg-green-300 text-black opacity-75 ">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">{footer}</CardFooter>
    </Card>
  );
};

export default InfoCard;
